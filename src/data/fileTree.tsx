import type { IFile } from "../interfaces";
import { v4 as uuid } from "uuid";

export const fileTree: IFile = {
  id: uuid(),
  name: "VSCODE-Clone",
  isFolder: true,
  children: [
    {
      id: uuid(),
      name: "node_modules",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: ".vite",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "index.js",
              isFolder: false,
            }
          ]
        }
      ]
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
              name: "ui",
              isFolder: true,
              children: [
                {
                  id: uuid(),
                  name: "File.tsx",
                  isFolder: false,
                  content:
`import { FC } from "react";

interface Props {
  name: string;
  isFolder: boolean;
}

const File: FC<Props> = ({ name, isFolder }) => {
  return (
    <div className="pl-4">
      {isFolder ? "📁" : "📄"} {name}
    </div>
  );
};

export default File;`
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
                  content:
`import type { IFile } from "../../interfaces";
import { v4 as uuid } from "uuid";

// fileTree data goes here (ref to main fileTree definition)
export const dummyFileTree: IFile = {
  id: uuid(),
  name: "project",
  isFolder: true,
  children: []
};`
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
`import File from "./components/svg/File";

const App = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-black">
      <img
        src="/icons/vscode.svg"
        className="w-64 h-64 transition-all duration-300 drop-shadow-[0_0_15px_#2196f3] hover:drop-shadow-[0_0_35px_#2196f3]"
        alt="VSCode"
      />
    </div>
  );
};

export default App;`
        },
        {
          id: uuid(),
          name: "index.css",
          isFolder: false,
          content:
`@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  margin: 0;
  background-color: #1e1e1e;
  color: white;
  font-family: 'Fira Code', monospace;
}`
        },
        {
          id: uuid(),
          name: "main.tsx",
          isFolder: false,
          content:
`import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`
        }
      ]
    },
    {
      id: uuid(),
      name: "package.json",
      isFolder: false,
      content:
`{
  "name": "vscode-clone",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "uuid": "^9.0.0"
  },
  "devDependencies": {
    "tailwindcss": "^3.3.0",
    "typescript": "^5.0.0",
    "vite": "^4.0.0"
  }
}`
    },
    {
      id: uuid(),
      name: "tsconfig.json",
      isFolder: false,
      content:
`{
  "compilerOptions": {
    "target": "esnext",
    "useDefineForClassFields": true,
    "module": "esnext",
    "moduleResolution": "node",
    "jsx": "react-jsx",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src"]
}`
    }
  ]
};
