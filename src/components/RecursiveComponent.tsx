import { useState } from "react";
import type { IFile } from "../interfaces";
import BottomArrowIcon from "./svg/Bottom";
import RightArrowIcon from "./svg/Right";
import RenderFileIcon from "./RenderFileIcon";
import { useAppDispatch, type RootState } from "../app/store";
import { setClickedFile, setOpenedFiles } from "../app/features/fileTreeSlice";
import { useSelector } from "react-redux";
import { doesFileExist } from "../utils/functions";

interface IProps {
  fileTree: IFile;
  isRoot?: boolean;
}

const RecursiveComponent = ({ fileTree, isRoot }: IProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // Dispatch
  const dispatch = useAppDispatch();
  // Selectors
  const openedFiles = useSelector((state: RootState) => state.fileTree.openedFiles);

  // Handler
  const toggle = () => setIsOpen(prev => !prev);
  const onFileClick = () => {
    const exists = doesFileExist(openedFiles, fileTree.id);
    if (exists) {
      dispatch(setClickedFile({ fileName: fileTree.name, fileContent: fileTree.content, activeTabId: fileTree.id }));
      return;
    };
    dispatch(setOpenedFiles([...openedFiles , fileTree]));
    dispatch(setClickedFile({ fileName: fileTree.name, fileContent: fileTree.content, activeTabId: fileTree.id }));
  };

  return (
    <div className={isRoot ? "cursor-pointer" : "ml-2.5 cursor-pointer"}>
      <div className="flex items-center mb-1">
        {fileTree.isFolder ? (
          <div onClick={toggle} className="flex items-center">
            {isOpen ? <BottomArrowIcon /> : <RightArrowIcon /> }
            <RenderFileIcon filename={fileTree.name} isFolder={fileTree.isFolder} isOpen={isOpen} />
            <span className="ml-1">{fileTree.name}</span>
          </div>
        ) : (
          <div className="flex items-center" onClick={onFileClick}>
            <span className="mr-1">
              <RenderFileIcon filename={fileTree.name} />
            </span>
            <span>{fileTree.name}</span>
          </div>
        )}
      </div>
      { 
        isOpen && fileTree.children && fileTree.children.map((file, index) => (
          <RecursiveComponent key={index} fileTree={file} isRoot={false} />
        ))
      }
    </div>
  );
}

export default RecursiveComponent;