import { useState } from "react";
import type { IFile } from "../interfaces";
import BottomArrowIcon from "./svg/Bottom";
import RightArrowIcon from "./svg/Right";
import RenderFileIcon from "./RenderFileIcon";

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
            <RenderFileIcon filename={fileTree.name} />
            <span>{fileTree.name}</span>
          </div>
        ) : (
          <div className="flex items-center">
            <span className="mr-1">
              <RenderFileIcon filename={fileTree.name} />
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