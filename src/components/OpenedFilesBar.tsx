import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import OpenedFilesBarTap from "./OpenedFilesBarTap";

const OpenedFilesBar = () => {
    const { openedFiles, clickedFile } = useSelector((state: RootState) => state.fileTree);

  return (
    <div className="w-screen h-fit">
      <div className=" border-b-2 border-[#64646473]">
        <div className="flex items-center">
          {openedFiles.map((file) => (
            <OpenedFilesBarTap key={file.id} file={file} />
          ))}
        </div>
      </div>
      <div className="content p-3">
        {clickedFile.fileContent}
      </div>
    </div>
  );
}

export default OpenedFilesBar;