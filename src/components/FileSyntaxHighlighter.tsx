import { useState } from "react";
import type { IFile } from "../interfaces";
import BottomArrowIcon from "./svg/Bottom";
import FileIcon from "./svg/File";
import FolderIcon from "./svg/Folder";
import RightArrowIcon from "./svg/Right";

interface IProps {
  fileTree: IFile;
}

const FileSyntaxHighlighter = ({ fileTree }: IProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Handler
  const toggle = () => setIsOpen(prev => !prev);
  return (
    <div className="mb-2 ml-2 cursor-pointer">
      <div className="flex items-center mb-1">
        {fileTree.isFolder ? (
          <div onClick={toggle} className="flex items-center">
            {isOpen ? <BottomArrowIcon /> : <RightArrowIcon /> }
            <FolderIcon />
            <span>{fileTree.name}</span>
          </div>
        ) : (
          <div className="flex items-center">
            <span className="mr-1">
              <FileIcon />
            </span>
            <span>{fileTree.name}</span>
          </div>
        )}
      </div>
      { 
        isOpen && fileTree.children && fileTree.children.map((file, index) => (
          <FileSyntaxHighlighter key={index} fileTree={file} />
        ))
      }
    </div>
  );
}

export default FileSyntaxHighlighter;