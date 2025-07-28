export interface IFile {
  id: string;
  name: string;
  isFolder: boolean;
  children?: IFile[];
  content?: string;
}

export interface IClickedFile {
  fileName: string;
  fileContent: string | undefined;
}

export interface IOpenedFile {
  activeTabId: string | null;
  openedFiles: IFile[];
  clickedFile: IClickedFile;
}