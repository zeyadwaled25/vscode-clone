import type { IFile } from "../interfaces";
import FileIcon from "./svg/File";
import RightArrowIcon from "./svg/Right";

interface IProps {
  fileTree: IFile;
}

const FileSyntaxHighlighter = ({ fileTree }: IProps) => {
  return (
    <div className="mb-2 ml-2">
      <div className="flex items-center mb-1">
        <RightArrowIcon />
        <span className="mr-2">
          <FileIcon />
        </span>
        <span>{fileTree.name}</span>
      </div>
      {
        fileTree.children && fileTree.children.map((file, index) => (
          <FileSyntaxHighlighter key={index} fileTree={file} />
        ))
      }
    </div>
  );
}

export default FileSyntaxHighlighter;