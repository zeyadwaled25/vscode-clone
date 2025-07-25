import type { IFile } from "../interfaces";

export const fileTree: IFile = {
  name: "VSCODE-Clone",
  isFolder: true,
  children: [
    {
      name: "node_modules",
      isFolder: true,
    },
    {
      name: "public",
      isFolder: true,
      children: [
        {
          name: "icons",
          isFolder: true,
          children: [
            {
              name: "react.svg",
              isFolder: false,
            },
            {
              name: "vue.svg",
              isFolder: false,
            },
            {
              name: "angular.svg",
              isFolder: false,
            }
          ]
        },
        {
          name: "vscode.svg",
          isFolder: false,
        }
      ]
    },
    {
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
            },
            {
              name: "data",
              isFolder: true,
              children: [
                {
                  name: "fileTree.tsx",
                  isFolder: false,
                }
              ]
            }
          ]
        },
        {
          name: "App.tsx",
          isFolder: false,
        },
        {
          name: "index.css",
          isFolder: false,
        },
        {
          name: "main.tsx",
          isFolder: false,
        }
      ]
    },
    {
      name: "package.json",
      isFolder: false,
    },
    {
      name: "tsconfig.json",
      isFolder: false,
    }
  ]
}