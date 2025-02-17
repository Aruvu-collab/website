import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

  export default defineConfig({
    branch,
    clientId: "32bcbfeb-9612-4f3f-830a-60a6296fd29b",
    token: "cecbba53cb953410e3ed0ad4e760e4081674838a",
  
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
                { type: "string", name: "slug", label: "URL Add On" },
                { type: "string", name: "role", label: "Role" },
                { type: "rich-text", name: "bio", label: "Bio" },
              ],
            },
          ],
        },
        {
          label: "Work",
          name: "work",
          path: "src/lib/work", // Correct path to the single YAML file
          format: "yaml",          // Format should remain as YAML
          fields: [
            {
              type: "object",
              list: true, // List field to represent multiple people
              name: "work",
              itemProps: (item) => ({
                label: item.name || "New work package", // Dynamically set label to person's name
              }),
              fields: [
                { type: "string", name: "name", label: "Work Package" },
                { type: "image", name: "cover", label: "Cover"},
                { type: "rich-text", name: "desc", label: "Description" },
                {
                  type: 'object',
                  name: 'images', // Name for the multiple images field
                  label: 'Additional Images',
                  list: true, // Enable multiple selections
                  fields: [
                    {
                      type: 'image',
                      name: 'url',
                      label: 'Image URL',
                    },
                    {
                      type: 'string',
                      name: 'caption',
                      label: 'Caption',
                    },
                  ],
                },
                { type: "string", name: "slug", label: "URL Add On" },
              ],
            },
          ],
        },
        {
          label: "Engagements",
          name: "engagements",
          path: "src/lib/engagements", // Correct path to the single YAML file
          format: "yaml",          // Format should remain as YAML
          fields: [
            {
              type: "object",
              list: true, // List field to represent multiple people
              name: "engagements",
              itemProps: (item) => ({
                label: item.name || "New work package", // Dynamically set label to person's name
              }),
              fields: [
                { type: "string", name: "name", label: "Engagement" },
                { type: "image", name: "cover", label: "Cover"},
                { type: "rich-text", name: "desc", label: "Description" },
                {
                  type: 'object',
                  name: 'images', // Name for the multiple images field
                  label: 'Additional Images',
                  list: true, // Enable multiple selections
                  fields: [
                    {
                      type: 'image',
                      name: 'url',
                      label: 'Image URL',
                    },
                    {
                      type: 'string',
                      name: 'caption',
                      label: 'Caption',
                    },
                  ],
                },
                { type: "string", name: "slug", label: "URL Add On" },
              ],
            },
          ],
        },
        {
          label: "Collaborators",
          name: "collaborators",
          path: "src/lib/collaborators",
          format: "yaml",
          fields: [
            {
              type: "object",
              list: true, // List field to represent multiple people
              name: "collaborators",
              itemProps: (item) => ({
                label: item.name || "New Collaborator", // Dynamically set label to person's name
              }),
              fields: [
                { type: "string", name: "name", label: "Name" },
                { type: "image", name: "photo", label: "Photo" },
              ],
            },
          ],
        },
      ],
    },
  });
  