import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    DATABASE_URL: z
      .string()
      .refine(
        (str) => !str.includes("YOUR_MYSQL_URL_HERE"),
        "You forgot to change the default URL",
      ),
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
    AWS_ACCESS_KEY_ID: z.string(),
    AWS_SECRET_ACCESS_KEY: z.string(),
    AWS_DEFAULT_REGION: z.string(),
    AWS_S3_TEMP_BUCKET_NAME: z.string(),
    FAN_TOKEN_MANAGER_PRIVATE_KEY: z.string(),
    FFMPEG_API_URL: z.string(),
    FFMPEG_API_KEY: z.string(),
    LIGHTHOUSE_API_KEY: z.string(),
    MEDIA_KEK: z.string(),
  },

  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    // Default = production
    NEXT_PUBLIC_CHILIZ_SPICY_RPC_URL: z.string(),
    NEXT_PUBLIC_BASE_SEPOLIA_RPC_URL: z.string(),
    NEXT_PUBLIC_ARBITRUM_SEPOLIA_RPC_URL: z.string(),
    NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID: z.string(),
    NEXT_PUBLIC_PIMLICO_API_KEY: z.string(),
    NEXT_PUBLIC_WLD_APP_ID: z.string(),
    NEXT_PUBLIC_WLD_ACTION_ID: z.string(),
  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    NODE_ENV: process.env.NODE_ENV,
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    AWS_DEFAULT_REGION: process.env.AWS_DEFAULT_REGION,
    AWS_S3_TEMP_BUCKET_NAME: process.env.AWS_S3_TEMP_BUCKET_NAME,
    FAN_TOKEN_MANAGER_PRIVATE_KEY: process.env.FAN_TOKEN_MANAGER_PRIVATE_KEY,
    FFMPEG_API_URL: process.env.FFMPEG_API_URL,
    FFMPEG_API_KEY: process.env.FFMPEG_API_KEY,
    LIGHTHOUSE_API_KEY: process.env.LIGHTHOUSE_API_KEY,
    MEDIA_KEK: process.env.MEDIA_KEK,
    NEXT_PUBLIC_BASE_SEPOLIA_RPC_URL:
      process.env.NEXT_PUBLIC_BASE_SEPOLIA_RPC_URL ??
      "https://sepolia.base.org",
    NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID:
      process.env.NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID ??
      "269789a9-905c-4acc-a458-5011c11c3fa4",
    NEXT_PUBLIC_PIMLICO_API_KEY:
      process.env.NEXT_PUBLIC_PIMLICO_API_KEY ??
      "d73da1e7-bd3e-4abd-86fe-40a5c2a994f9",
    NEXT_PUBLIC_CHILIZ_SPICY_RPC_URL:
      process.env.NEXT_PUBLIC_CHILIZ_SPICY_RPC_URL ??
      "https://spicy-rpc.chiliz.com",
    NEXT_PUBLIC_WLD_APP_ID:
      process.env.NEXT_PUBLIC_WLD_APP_ID ??
      "app_staging_63800ac4dbcf33afef084231cbd7bee1",
    NEXT_PUBLIC_WLD_ACTION_ID:
      process.env.NEXT_PUBLIC_WLD_ACTION_ID ?? "indietunes",
    NEXT_PUBLIC_ARBITRUM_SEPOLIA_RPC_URL:
      process.env.NEXT_PUBLIC_ARBITRUM_SEPOLIA_RPC_URL ??
      "https://public.stackup.sh/api/v1/node/arbitrum-sepolia",
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially
   * useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  /**
   * Makes it so that empty strings are treated as undefined.
   * `SOME_VAR: z.string()` and `SOME_VAR=''` will throw an error.
   */
  emptyStringAsUndefined: true,
});
