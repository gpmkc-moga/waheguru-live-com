import { defineConfig } from "tinacms";
import {
  audio_galleryFields,
  daily_hukumnamaFields,
  home_sliderFields,
  popupFields,
  programsFields,
} from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "master";

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID || "", // Get this from tina.io
  token: process.env.TINA_TOKEN || "", // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "media",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        format: "json",
        label: "Daily Hukumnana",
        name: "daily_hukumnana",
        path: "content",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "daily-hukumnama",
        },
        fields: [
          {
            type: "image",
            name: "photo",
            label: "Photo",
          },
          {
            type: "image",
            name: "audio",
            label: "Audio",
          },
          {
            type: "boolean",
            name: "has_gurbani_description",
            label: "Include Gurbani Description?",
          },
          {
            type: "string",
            name: "Gurbani",
            label: "Gurbani Description",
            ui: {
              component: "textarea",
            },
          },
        ],
      },
      {
        format: "json",
        label: "Popup",
        name: "popup",
        path: "content",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "popup",
        },
        fields: [
          {
            type: "image",
            name: "image",
            label: "Popup Image",
          },
          {
            type: "number",
            name: "timeout",
            label: "Popup Timeout",
          },
        ],
      },
      {
        format: "json",
        label: "Home Slider",
        name: "home_slider",
        path: "content",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "home-slider",
        },
        fields: [
          {
            type: "object",
            name: "slides",
            label: "Slides",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: `${item?.description}` };
              },
            },
            fields: [
              {
                type: "image",
                name: "path",
                label: "path",
              },
              {
                type: "string",
                name: "description",
                label: "description",
              },
            ],
          },
        ],
      },
      {
        format: "json",
        label: "Programs",
        name: "programs",
        path: "content",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "programs",
        },
        fields: [
          {
            type: "object",
            name: "programs",
            label: "Programs",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: `${item?.program_name}` };
              },
            },
            fields: [
              {
                type: "string",
                name: "program_name",
                label: "Program Name",
              },
              {
                type: "datetime",
                name: "program_start_date",
                label: "Program start date",
                required: true,
              },
              {
                type: "datetime",
                name: "program_end_date",
                label: "Program end date",
              },
              {
                type: "string",
                name: "program_address_line_1",
                label: "Program Address Line 1",
                required: true,
              },
              {
                type: "string",
                name: "program_address_line_2",
                label: "Program Address Line 2",
                required: true,
              },
              {
                type: "image",
                name: "program_poster",
                label: "Program Poster",
              },
              {
                type: "string",
                name: "program_location",
                label: "Program Location",
                options: ["Headquarters", "Outside"],
                required: true,
              },
            ],
          },
        ],
      },
      {
        format: "json",
        label: "Audio Gallery",
        name: "audio_gallery",
        path: "content",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "audio-gallery",
        },
        fields: [
          {
            type: "object",
            name: "albums",
            label: "Albums",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: `${item?.name}` };
              },
            },
            fields: [
              {
                type: "image",
                name: "cover",
                label: "Cover",
              },
              {
                type: "string",
                name: "name",
                label: "Name",
                required: true,
              },
              {
                type: "string",
                name: "artist",
                label: "Artist",
              },
              {
                type: "boolean",
                name: "allow_downloads",
                label: "Allow downloads",
              },
              {
                type: "string",
                name: "audio_files",
                label: "Audio Files link",
                list: true,
              },
            ],
          },
        ],
      },
    ],
  },
});
