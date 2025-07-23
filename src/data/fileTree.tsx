import type { IFile } from "../interfaces";

export const fileTree: IFile = {
  name: "src",
  isFolder: true,
  children: [
    {
      name: "components",
      isFolder: true,
      children: [
        {
          name: "svg",
          isFolder: true,
          children: [
            {
              name: "File.tsx",
              isFolder: false,
            }
          ]
        }
      ]
    },
    {
      name: "index.tsx",
      isFolder: false,
    }
  ]
}