import { useEffect, useRef } from "react";
import Li from "./Li";
import { setClickedFile, setOpenedFiles } from "../../app/features/fileTreeSlice";
import { useAppDispatch, type RootState } from "../../app/store";
import { useSelector } from "react-redux";

interface IProps {
  positions: {
    x: number;
    y: number;
  };
  setShowMenu: (val: boolean) => void;
}

const ContextMenu = ({ positions, setShowMenu }: IProps) => {
  // Menu Ref
  const menuRef = useRef<HTMLUListElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false)
      }
    }
    window.addEventListener('mousedown', handleClickOutside)

    return () => {
      window.removeEventListener('mousedown', handleClickOutside)
    }
  }, [setShowMenu])

  // Close Actions
  const dispatch = useAppDispatch();
  const { openedFiles, tabIdToRemove } = useSelector((state: RootState) => state.fileTree);

  const onClose = () => {
    const filtered = openedFiles.filter(file => file.id !== tabIdToRemove);
    const lastTab = filtered[filtered.length - 1];

    dispatch(setOpenedFiles(filtered));

    if (lastTab) {
      dispatch(setClickedFile({ fileName: lastTab.name, fileContent: lastTab.content, activeTabId: lastTab.id }));
    } else {
      dispatch(setClickedFile({ fileName: "", fileContent: "", activeTabId: null }));
    }

    setShowMenu(false);
  };

  const onCloseOthers = () => {
    const selectedTab = openedFiles.find(file => file.id === tabIdToRemove);
    if (!selectedTab) return;

    dispatch(setOpenedFiles([selectedTab]));
    dispatch(setClickedFile({ fileName: selectedTab.name, fileContent: selectedTab.content, activeTabId: selectedTab.id }));
    setShowMenu(false);
  };

  const onCloseAll = () => {
    dispatch(setOpenedFiles([]));
    dispatch(setClickedFile({ fileName: "", fileContent: "", activeTabId: null }));
    setShowMenu(false);
  };


  return (
    <ul
      ref={menuRef}
      className="bg-[#252526] text-[#cccccc] rounded-md py-1 shadow-lg border border-[#3c3c3c] w-48 text-sm"
      style={{
        position: "absolute",
        left: positions.x,
        top: positions.y,
        zIndex: 1000,
      }}
    >
      <Li liName="Close" onClick={onClose} tooltip={"Say goodbye to this tab 👋"} />
      <Li liName="Close Others" onClick={onCloseOthers} tooltip={`Just you and me now 😂`} />
      <Li liName="Close All" onClick={onCloseAll} tooltip={"Peace. Silence. No tabs 🕊️"} />
    </ul>
  );
};

export default ContextMenu;
