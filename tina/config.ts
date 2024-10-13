import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

  export default defineConfig({
    branch,
    clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
    token: process.env.TINA_TOKEN,
  
    build: {
      outputFolder: "admin",
      publicFolder: "static",
    },
    media: {
      tina: {
        mediaRoot: "",
        publicFolder: "static",
      },
    },
    schema: {
      collections: [
        {
          label: "People",
          name: "people",
          path: "src/lib/people", // Correct path to the single YAML file
          format: "yaml",          // Format should remain as YAML
          fields: [
            {
              type: "object",
              list: true, // List field to represent multiple people
              name: "people",
              itemProps: (item) => ({
                label: item.name || "New Person", // Dynamically set label to person's name
              }),
              fields: [
                { type: "string", name: "name", label: "Name" },
                { type: "image", name: "photo", label: "Photo" },
                { type: "rich-text", name: "bio", label: "Bio" },
              ],
            },
          ],
        },
      ],
    },
  });
  