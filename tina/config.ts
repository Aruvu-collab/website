import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
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
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        label: "People",
        name: "people",
        path: "content/people",
        fields: [
          { type: "string", name: "name", label: "Name" },
          { type: "image", name: "photo", label: "Photo" },
          { type: "rich-text", name: "bio", label: "Bio" },
        ],
      },
      {
        label: "Work",
        name: "work",
        path: "content/work",
        fields: [
          { type: "string", name: "title", label: "Title" },
          { type: "string", name: "description", label: "Description" },
        ],
      },
      {
        label: "Places",
        name: "places",
        path: "content/places",
        fields: [
          { type: "string", name: "title", label: "Title" },
          { type: "string", name: "description", label: "Description" },
        ],
      },
      {
        label: "Collaborators",
        name: "collaborators",
        path: "content/collaborators",
        fields: [
          { type: "string", name: "title", label: "Title" },
          { type: "string", name: "description", label: "Description" },
        ],
      },
    ],
  },
});
