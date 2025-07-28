import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import OpenedFilesBarTap from "./OpenedFilesBarTap";

const OpenedFilesBar = () => {
    const { openedFiles, clickedFile } = useSelector((state: RootState) => state.fileTree);

  return (
    <div>
      <div className="flex items-center">
        {openedFiles.map((file) => (
          <OpenedFilesBarTap key={file.id} file={file} />
        ))}
      </div>
      {clickedFile.fileContent}
    </div>
  );
}

export default OpenedFilesBar;