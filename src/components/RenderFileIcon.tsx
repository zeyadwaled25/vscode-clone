import IconImg from "./IconImg";
import FolderIcon from "./svg/Folder";

interface IProps {
  filename: string;
}

const RenderFileIcon = ({ filename }: IProps) => {
  const fileExtension = filename.split('.').pop();
  
  if (fileExtension === 'tsx') return <IconImg src="/icons/react_ts.svg" />;
  if (fileExtension === 'jsx') return <IconImg src="/icons/react.svg" />;
  if (fileExtension === 'css') return <IconImg src="/icons/css.svg" />;
  if (fileExtension === 'svg') return <IconImg src="/icons/svg.svg" />;
  if (fileExtension === 'json') return <IconImg src="/icons/json.svg" />;

  return <FolderIcon />;
};

export default RenderFileIcon;
