import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { api } from "~/utils/trpc";
import Dropzone from "~/components/ui/dropzone";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Form, FormField, FormLabel, FormControl, FormDescription, FormMessage, FormItem } from "~/components/ui/form";
import { SongCard } from "./song-card";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  price: z.number().min(0, {
    message: "Price must be at least 0.1 USDC.",
  }),
  artwork: z.string(),
});

export const CreateSongForm = () => {
  const [artworkFile, setArtworkFile] = useState<string | null>(null);
  const [insertMetadataData, setInsertMetadataData] = useState(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "Title",
      price: 0,
    },
  });

  const insertMetadataMutation = api.media.insertMetadata.useMutation();
  const signedUrlQuery = api.media.signedUrl.useMutation();

  const fields = form.watch();

  const handleDropArtwork = async (acceptedFiles: FileList | null) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      const allowedTypes = [
        { name: "jpg", types: ["image/jpeg"] },
        { name: "png", types: ["image/png"] },
      ];
      const fileType = allowedTypes.find((allowedType) =>
        allowedType.types.find((type) => type === acceptedFiles?.[0]?.type),
      );
      if (!fileType) {
        form.setValue("artwork", "");
        form.setError("artwork", {
          message: "File type is not valid",
          type: "typeError",
        });
      } else {
        const artworkFile = acceptedFiles?.[0];
        if (!artworkFile) return;
        const albumCover = URL.createObjectURL(artworkFile); // Convert the File object to a data URL
        setArtworkFile(albumCover);

        // Get the signed URL for artwork upload
        const signedUrl = await signedUrlQuery.mutateAsync();

        // Upload artwork to S3 using the signed URL
        const x = await fetch(signedUrl?.url, {
          method: "PUT",
          body: artworkFile,
          headers: {
            "Content-Type": artworkFile.type,
          },
        });

        // Save the artwork URL in the form data
        form.setValue("artwork", signedUrl.uploadId);
      }
    } else {
      form.setValue("artwork", null);
      form.setError("artwork", {
        message: "Artwork is required",
        type: "typeError",
      });
    }
  };

  const handleFormSubmit = async () => {
    // Submit the form data and artwork URL to save the metadata for the song
    const formData = form.getValues();
    await insertMetadataMutation.mutateAsync({
      songId: 123, // Replace with actual song ID
      title: formData.title,
      description: "Song description", // Replace with actual description
      artworkUploadId: formData.artwork,
      mediaUploadId: "mediaUploadId", // Replace with actual media upload ID
    });
  };

  return (
    <Form {...form} onSubmit={handleFormSubmit}>
      <div className="text-md my-4 mt-10 text-2xl font-semibold tracking-tight">
        Create a new Tune
      </div>
      <div className="grid gap-12 md:grid-cols-3">
        <div className="space-y-4 md:col-span-2">
          <FormField
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter title" {...field} />
                </FormControl>
                <FormDescription>Enter the title of your tune.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Enter price" {...field} />
                </FormControl>
                <FormDescription>
                  Enter the price you want users to pay for this tune in USDC.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="file"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Artwork</FormLabel>
                <FormControl>
                  {/* <Input type="file" {...field} /> */}
                  <Dropzone
                    {...field}
                    dropMessage="Drop files or click here"
                    handleOnDrop={handleDropArtwork}
                  />
                </FormControl>
                <FormDescription>
                  Upload your tune's artwork in an image file format.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="file"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tune File</FormLabel>
                <FormControl>
                  {/* <Input type="file" {...field} /> */}
                  <Dropzone
                    {...field}
                    dropMessage="Drop files or click here"
                    handleOnDrop={handleDropArtwork}
                  />
                </FormControl>
                <FormDescription>
                  Upload your tune's mp3 / wav file.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Upload</Button>
        </div>
        <div>
          <div className="mb-3 text-center font-semibold tracking-tight text-neutral-500">
            Tune preview
          </div>
          <SongCard
            albumCover={artworkFile ? artworkFile : "https://picsum.photos/seed/asdf/200/300"}
            {...{
              songName: fields.title || "Title",
              artistName: "Lucid Waves",
              price: fields.price,
              createdAt: "April 1, 2023",
            }}
          />
        </div>
      </div>
    </Form>
  );
};

