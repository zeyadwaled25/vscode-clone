import { useEffect, useRef } from "react";
import Li from "./Li";

interface IProps {
  positions: {
    x: number;
    y: number;
  };
  setShowMenu: (val: boolean) => void;
}

const ContextMenu = ({ positions, setShowMenu }: IProps) => {
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
      <Li liName="Close" />
      <Li liName="Close Others" />
      <Li liName="Close All" />
      <li className="border-t border-[#3c3c3c] my-1"></li>
      <Li liName="Rename" />
      <Li liName="Delete" />
    </ul>
  );
};

export default ContextMenu;
