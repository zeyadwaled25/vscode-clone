import type { MouseEventHandler } from "react";

interface IProps {
  liName: string
  onClick?: MouseEventHandler<HTMLLIElement>
  tooltip?: string;
}

const Li= ({liName, onClick, tooltip}: IProps) => {
  return (
    <li className="relative group px-4 py-2 hover:bg-[#094771] hover:text-white cursor-pointer transition-colors" onClick={onClick}>
      {liName}
      {tooltip && (
        <span
          className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 text-xs bg-black text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50"
        >
          {tooltip}
        </span>
      )}
    </li>
  );
}

export default Li;