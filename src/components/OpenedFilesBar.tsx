import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import OpenedFilesBarTap from "./OpenedFilesBarTap";
import { useState } from "react";
import ContextMenu from "./ui/ContextMenu";

const OpenedFilesBar = () => {
  const { openedFiles } = useSelector((state: RootState) => state.fileTree);

  const [showMenu, setShowMenu] = useState(false)
  const [position, setPosition] = useState<{x: number, y: number}>({x: 0, y: 0})

  return (
    <div className="w-screen h-fit">
      <div
        className=" border-b-2 border-[#64646473]"
        onContextMenu={(e) => {
          e.preventDefault();
          setPosition({x: e.clientX, y: e.clientY})
          setShowMenu(true)
        }}
      >
        <div className="flex items-center">
          {openedFiles.map((file) => (
            <OpenedFilesBarTap key={file.id} file={file} />
          ))}
        </div>
      </div>
      {showMenu && <ContextMenu positions={position} setShowMenu={setShowMenu} />}
    </div>
  );
}

export default OpenedFilesBar;