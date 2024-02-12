module.exports = {
  "import/order": [
    "error",
    {
      groups: ["external", "internal", "builtin"],
      pathGroups: [
        {
          pattern: "@**",
          group: "internal",
          position: "before",
        },
      ],
      "newlines-between": "always",
      pathGroupsExcludedImportTypes: [],
      alphabetize: {
        order: "asc",
        caseInsensitive: true,
      },
    },
  ],
};
