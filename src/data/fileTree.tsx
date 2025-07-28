import type { IFile } from "../interfaces";
import {v4 as uuid } from "uuid";

export const fileTree: IFile = {
  id: uuid(),
  name: "VSCODE-Clone",
  isFolder: true,
  children: [
    {
      id: uuid(),
      name: "node_modules",
      isFolder: true,
    },
    {
      id: uuid(),
      name: "public",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: "icons",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "react.svg",
              isFolder: false,
            },
            {
              id: uuid(),
              name: "vue.svg",
              isFolder: false,
            },
            {
              id: uuid(),
              name: "angular.svg",
              isFolder: false,
            }
          ]
        },
        {
          id: uuid(),
          name: "vscode.svg",
          isFolder: false,
        }
      ]
    },
    {
      id: uuid(),
      name: "src",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: "components",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "svg",
              isFolder: true,
              children: [
                {
                  id: uuid(),
                  name: "File.tsx",
                  isFolder: false,
                }
              ]
            },
            {
              id: uuid(),
              name: "data",
              isFolder: true,
              children: [
                {
                  id: uuid(),
                  name: "fileTree.tsx",
                  isFolder: false,
                }
              ]
            }
          ]
        },
        {
          id: uuid(),
          name: "App.tsx",
          isFolder: false,
          content:
            `
              import FileSyntaxHighlighter from "./components/FileSyntaxHighlighter"
              import OpenedFilesBar from "./components/OpenedFilesBar"
              const App = () => {
                return <h3>App</h3>
              }
              export defualt App;
            `
        },
        {
          id: uuid(),
          name: "index.css",
          isFolder: false,
        },
        {
          id: uuid(),
          name: "main.tsx",
          isFolder: false,
        }
      ]
    },
    {
      id: uuid(),
      name: "package.json",
      isFolder: false,
    },
    {
      id: uuid(),
      name: "tsconfig.json",
      isFolder: false,
    }
  ]
}