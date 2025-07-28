import { useSelector } from "react-redux";
import { setClickedFile } from "../app/features/fileTreeSlice";
import { useAppDispatch, type RootState } from "../app/store";
import type { IFile } from "../interfaces";
import RenderFileIcon from "./RenderFileIcon";
import CloseIcon from "./svg/CloseIcon";

interface IProps {
  file: IFile;
}

const OpenedFilesBarTap = ({ file }: IProps) => {
  const dispatch = useAppDispatch();
  const {activeTabId} = useSelector((state: RootState) => state.fileTree.clickedFile);

  const onClickedFile = () => {
    dispatch(setClickedFile({ fileName: file.name, fileContent: file.content, activeTabId: file.id }));
  }

  return (
    <div key={file.id}
      className={`flex items-center border px-1 border-t-2 border-b-0
                ${activeTabId === file.id ? "border-t-[#cf6ccf]" : "border-t-transparent"}
                hover:bg-[#6464643b] duration-300 border-[#2a2a2a]`}
      onClick={onClickedFile}>
      <RenderFileIcon filename={file.name} />
      <span className="cursor-pointer flex justify-center items-center w-fit mr-2 p-1 rounded-md">
        {file.name}
      </span>
      <span className="cursor-pointer hover:bg-[#64646473] duration-300 flex justify-center items-center w-fit mr-1 rounded-md">
        <CloseIcon />
      </span>
    </div>
  );
}

export default OpenedFilesBarTap;