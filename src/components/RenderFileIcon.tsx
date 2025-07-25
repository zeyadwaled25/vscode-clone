import IconImg from "./IconImg";
import FileIcon from "./svg/File";

interface IProps {
  filename: string;
  isFolder?: boolean;
  isOpen?: boolean;
}

const RenderFileIcon = ({ filename, isFolder, isOpen }: IProps) => {
  const fileExtension = filename.split('.').pop();

  // Files
  if (fileExtension === 'tsx') return <IconImg src="/icons/react_ts.svg" />;
  if (fileExtension === 'jsx') return <IconImg src="/icons/react.svg" />;
  if (fileExtension === 'css') return <IconImg src="/icons/css.svg" />;
  if (fileExtension === 'svg') return <IconImg src="/icons/svg.svg" />;
  if (fileExtension === 'json') return <IconImg src="/icons/json.svg" />;

  // Folders
  if (fileExtension === 'node_modules' && isFolder)
    return isOpen ? (
      <IconImg src="/icons/folder-node-open.svg" />
    ) : (
      <IconImg src="/icons/folder-node.svg" />
    );
  if (fileExtension === 'public' && isFolder)
    return isOpen ? (
      <IconImg src="/icons/folder-public-open.svg" />
    ) : (
      <IconImg src="/icons/folder-public.svg" />
    );
  if (fileExtension === 'src' && isFolder)
    return isOpen ? (
      <IconImg src="/icons/folder-src-open.svg" />
    ) : (
      <IconImg src="/icons/folder-src.svg" />
    );

  if (isFolder && isOpen) return <IconImg src="/icons/folder-default-open.svg" />;
  if (isFolder && !isOpen) return <IconImg src="/icons/folder-default.svg" />;
  return <FileIcon />;
};

export default RenderFileIcon;
