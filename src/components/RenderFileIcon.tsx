import { extensionIconPaths } from "../constant";
import IconImg from "./IconImg";
import FileIcon from "./svg/File";

interface IProps {
  filename: string;
  isFolder?: boolean;
  isOpen?: boolean;
}

const RenderFileIcon = ({ filename, isFolder, isOpen }: IProps) => {
  const fileExtension = filename.split('.').pop();

  if (fileExtension && Object.prototype.hasOwnProperty.call(extensionIconPaths, fileExtension)) {
    const iconPath = extensionIconPaths[fileExtension];
    if (isFolder) {
      return isOpen ? <IconImg src={`${iconPath}-open.svg`} /> : <IconImg src={`${iconPath}.svg`} />;
    }
    return <IconImg src={`${iconPath}.svg`} />;
  }

  if (isFolder && isOpen) return <IconImg src="/icons/folder-default-open.svg" />;
  if (isFolder && !isOpen) return <IconImg src="/icons/folder-default.svg" />;
  return <FileIcon />;
};

export default RenderFileIcon;
