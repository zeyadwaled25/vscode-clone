import { setClickedFile } from "../app/features/fileTreeSlice";
import { useAppDispatch } from "../app/store";
import type { IFile } from "../interfaces";
import RenderFileIcon from "./RenderFileIcon";
import CloseIcon from "./svg/CloseIcon";

interface IProps {
  file: IFile;
}

const OpenedFilesBarTap = ({ file }: IProps) => {
  const dispatch = useAppDispatch();
  const onClickedFile = () => {
    dispatch(setClickedFile({ fileName: file.name, fileContent: file.content }));
  }

  return (
    <div key={file.id} className="flex items-center" onClick={onClickedFile}>
      <RenderFileIcon filename={file.name} />
      <span className="cursor-pointer hover:bg-[#64646473] duration-300 flex justify-center items-center w-fit mr-2 p-1 rounded-md">
        {file.name}
      </span>
      <span className="cursor-pointer hover:bg-[#64646473] duration-300 flex justify-center items-center w-fit mr-2 p-1 rounded-md">
        <CloseIcon />
      </span>
    </div>
  );
}

export default OpenedFilesBarTap;