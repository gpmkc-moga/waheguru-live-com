import type { TinaField } from "tinacms";
export function audio_galleryFields() {
  return [
    {
      type: "object",
      name: "albums",
      label: "Albums",
      list: true,
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
  ] as TinaField[];
}
export function daily_hukumnamaFields() {
  return [
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
  ] as TinaField[];
}
export function home_sliderFields() {
  return [
    {
      type: "object",
      name: "slides",
      label: "Slides",
      list: true,
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
  ] as TinaField[];
}
export function popupFields() {
  return [
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
  ] as TinaField[];
}
export function programsFields() {
  return [
    {
      type: "object",
      name: "programs",
      label: "Programs",
      list: true,
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
  ] as TinaField[];
}
