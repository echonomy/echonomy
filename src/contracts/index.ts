export const contracts = {
  EchonomySongRegistry: [
    {
      type: "function",
      name: "buySong",
      inputs: [{ name: "index", type: "uint256", internalType: "uint256" }],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "createSongContract",
      inputs: [{ name: "price", type: "uint256", internalType: "uint256" }],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "ownedSongs",
      inputs: [{ name: "owner", type: "address", internalType: "address" }],
      outputs: [{ name: "", type: "uint256[]", internalType: "uint256[]" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "ownsSong",
      inputs: [
        { name: "owner", type: "address", internalType: "address" },
        { name: "index", type: "uint256", internalType: "uint256" },
      ],
      outputs: [{ name: "", type: "bool", internalType: "bool" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "songArtist",
      inputs: [{ name: "index", type: "uint256", internalType: "uint256" }],
      outputs: [{ name: "", type: "address", internalType: "address" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "songCount",
      inputs: [],
      outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "songOwners",
      inputs: [{ name: "index", type: "uint256", internalType: "uint256" }],
      outputs: [{ name: "", type: "address[]", internalType: "address[]" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "songPrice",
      inputs: [{ name: "index", type: "uint256", internalType: "uint256" }],
      outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
      stateMutability: "view",
    },
    {
      type: "event",
      name: "SongCreated",
      inputs: [
        {
          name: "songId",
          type: "uint256",
          indexed: true,
          internalType: "uint256",
        },
        {
          name: "owner",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        {
          name: "price",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
  ],
  Safe: [
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
      ],
      name: "AddedOwner",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "approvedHash",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
      ],
      name: "ApproveHash",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "handler",
          type: "address",
        },
      ],
      name: "ChangedFallbackHandler",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "guard",
          type: "address",
        },
      ],
      name: "ChangedGuard",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "threshold",
          type: "uint256",
        },
      ],
      name: "ChangedThreshold",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "module",
          type: "address",
        },
      ],
      name: "DisabledModule",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "module",
          type: "address",
        },
      ],
      name: "EnabledModule",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "txHash",
          type: "bytes32",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "payment",
          type: "uint256",
        },
      ],
      name: "ExecutionFailure",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "module",
          type: "address",
        },
      ],
      name: "ExecutionFromModuleFailure",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "module",
          type: "address",
        },
      ],
      name: "ExecutionFromModuleSuccess",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "txHash",
          type: "bytes32",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "payment",
          type: "uint256",
        },
      ],
      name: "ExecutionSuccess",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
      ],
      name: "RemovedOwner",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "SafeReceived",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "initiator",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address[]",
          name: "owners",
          type: "address[]",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "threshold",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "address",
          name: "initializer",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address",
          name: "fallbackHandler",
          type: "address",
        },
      ],
      name: "SafeSetup",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "msgHash",
          type: "bytes32",
        },
      ],
      name: "SignMsg",
      type: "event",
    },
    {
      stateMutability: "nonpayable",
      type: "fallback",
    },
    {
      inputs: [],
      name: "VERSION",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "_threshold",
          type: "uint256",
        },
      ],
      name: "addOwnerWithThreshold",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "hashToApprove",
          type: "bytes32",
        },
      ],
      name: "approveHash",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      name: "approvedHashes",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_threshold",
          type: "uint256",
        },
      ],
      name: "changeThreshold",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "dataHash",
          type: "bytes32",
        },
        {
          internalType: "bytes",
          name: "data",
          type: "bytes",
        },
        {
          internalType: "bytes",
          name: "signatures",
          type: "bytes",
        },
        {
          internalType: "uint256",
          name: "requiredSignatures",
          type: "uint256",
        },
      ],
      name: "checkNSignatures",
      outputs: [],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "dataHash",
          type: "bytes32",
        },
        {
          internalType: "bytes",
          name: "data",
          type: "bytes",
        },
        {
          internalType: "bytes",
          name: "signatures",
          type: "bytes",
        },
      ],
      name: "checkSignatures",
      outputs: [],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "prevModule",
          type: "address",
        },
        {
          internalType: "address",
          name: "module",
          type: "address",
        },
      ],
      name: "disableModule",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "domainSeparator",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "module",
          type: "address",
        },
      ],
      name: "enableModule",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
        {
          internalType: "bytes",
          name: "data",
          type: "bytes",
        },
        {
          internalType: "enum Enum.Operation",
          name: "operation",
          type: "uint8",
        },
        {
          internalType: "uint256",
          name: "safeTxGas",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "baseGas",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "gasPrice",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "gasToken",
          type: "address",
        },
        {
          internalType: "address",
          name: "refundReceiver",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "_nonce",
          type: "uint256",
        },
      ],
      name: "encodeTransactionData",
      outputs: [
        {
          internalType: "bytes",
          name: "",
          type: "bytes",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
        {
          internalType: "bytes",
          name: "data",
          type: "bytes",
        },
        {
          internalType: "enum Enum.Operation",
          name: "operation",
          type: "uint8",
        },
        {
          internalType: "uint256",
          name: "safeTxGas",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "baseGas",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "gasPrice",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "gasToken",
          type: "address",
        },
        {
          internalType: "address payable",
          name: "refundReceiver",
          type: "address",
        },
        {
          internalType: "bytes",
          name: "signatures",
          type: "bytes",
        },
      ],
      name: "execTransaction",
      outputs: [
        {
          internalType: "bool",
          name: "success",
          type: "bool",
        },
      ],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
        {
          internalType: "bytes",
          name: "data",
          type: "bytes",
        },
        {
          internalType: "enum Enum.Operation",
          name: "operation",
          type: "uint8",
        },
      ],
      name: "execTransactionFromModule",
      outputs: [
        {
          internalType: "bool",
          name: "success",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
        {
          internalType: "bytes",
          name: "data",
          type: "bytes",
        },
        {
          internalType: "enum Enum.Operation",
          name: "operation",
          type: "uint8",
        },
      ],
      name: "execTransactionFromModuleReturnData",
      outputs: [
        {
          internalType: "bool",
          name: "success",
          type: "bool",
        },
        {
          internalType: "bytes",
          name: "returnData",
          type: "bytes",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "getChainId",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "start",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "pageSize",
          type: "uint256",
        },
      ],
      name: "getModulesPaginated",
      outputs: [
        {
          internalType: "address[]",
          name: "array",
          type: "address[]",
        },
        {
          internalType: "address",
          name: "next",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getOwners",
      outputs: [
        {
          internalType: "address[]",
          name: "",
          type: "address[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "offset",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "length",
          type: "uint256",
        },
      ],
      name: "getStorageAt",
      outputs: [
        {
          internalType: "bytes",
          name: "",
          type: "bytes",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getThreshold",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
        {
          internalType: "bytes",
          name: "data",
          type: "bytes",
        },
        {
          internalType: "enum Enum.Operation",
          name: "operation",
          type: "uint8",
        },
        {
          internalType: "uint256",
          name: "safeTxGas",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "baseGas",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "gasPrice",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "gasToken",
          type: "address",
        },
        {
          internalType: "address",
          name: "refundReceiver",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "_nonce",
          type: "uint256",
        },
      ],
      name: "getTransactionHash",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "module",
          type: "address",
        },
      ],
      name: "isModuleEnabled",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
      ],
      name: "isOwner",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "nonce",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "prevOwner",
          type: "address",
        },
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "_threshold",
          type: "uint256",
        },
      ],
      name: "removeOwner",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "handler",
          type: "address",
        },
      ],
      name: "setFallbackHandler",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "guard",
          type: "address",
        },
      ],
      name: "setGuard",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address[]",
          name: "_owners",
          type: "address[]",
        },
        {
          internalType: "uint256",
          name: "_threshold",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "bytes",
          name: "data",
          type: "bytes",
        },
        {
          internalType: "address",
          name: "fallbackHandler",
          type: "address",
        },
        {
          internalType: "address",
          name: "paymentToken",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "payment",
          type: "uint256",
        },
        {
          internalType: "address payable",
          name: "paymentReceiver",
          type: "address",
        },
      ],
      name: "setup",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      name: "signedMessages",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "targetContract",
          type: "address",
        },
        {
          internalType: "bytes",
          name: "calldataPayload",
          type: "bytes",
        },
      ],
      name: "simulateAndRevert",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "prevOwner",
          type: "address",
        },
        {
          internalType: "address",
          name: "oldOwner",
          type: "address",
        },
        {
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "swapOwner",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      stateMutability: "payable",
      type: "receive",
    },
  ],
  USDC: [
    {
      type: "function",
      name: "allowance",
      inputs: [
        { name: "owner", type: "address", internalType: "address" },
        { name: "spender", type: "address", internalType: "address" },
      ],
      outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "approve",
      inputs: [
        { name: "spender", type: "address", internalType: "address" },
        { name: "value", type: "uint256", internalType: "uint256" },
      ],
      outputs: [{ name: "", type: "bool", internalType: "bool" }],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "balanceOf",
      inputs: [{ name: "account", type: "address", internalType: "address" }],
      outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "totalSupply",
      inputs: [],
      outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "transfer",
      inputs: [
        { name: "to", type: "address", internalType: "address" },
        { name: "value", type: "uint256", internalType: "uint256" },
      ],
      outputs: [{ name: "", type: "bool", internalType: "bool" }],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "transferFrom",
      inputs: [
        { name: "from", type: "address", internalType: "address" },
        { name: "to", type: "address", internalType: "address" },
        { name: "value", type: "uint256", internalType: "uint256" },
      ],
      outputs: [{ name: "", type: "bool", internalType: "bool" }],
      stateMutability: "nonpayable",
    },
    {
      type: "event",
      name: "Approval",
      inputs: [
        {
          name: "owner",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        {
          name: "spender",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        {
          name: "value",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "Transfer",
      inputs: [
        {
          name: "from",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        {
          name: "to",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        {
          name: "value",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
  ],
} as const;

export type ContractName = keyof typeof contracts;
