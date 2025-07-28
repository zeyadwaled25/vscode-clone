export interface IFile {
  id: string;
  name: string;
  isFolder: boolean;
  children?: IFile[];
  content?: string;
}

export interface IOpenedFile {
  openedFile: IFile[];
  clickedFile: {
    fileName: string;
    fileContent: string;
  };
}