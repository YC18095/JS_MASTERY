
export const resourcePlaylist = {
    name: "resourcePlaylist",
    title: "Resource Playlist",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: "resources",
        title: "Resources",
        type: "array",
        of: [
          {
            type: "reference",
            to: [{ type: "resource" }],
          },
        ],
      },
    ]
  };
  