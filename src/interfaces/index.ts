export interface IFile {
  id: string;
  name: string;
  isFolder: boolean;
  children?: IFile[];
  content?: string;
}

export interface IClickedFile {
  activeTabId: string | null;
  fileName: string;
  fileContent: string | undefined;
}

export interface IOpenedFile {
  openedFiles: IFile[];
  clickedFile: IClickedFile;
  tabIdToRemove: string | null
}