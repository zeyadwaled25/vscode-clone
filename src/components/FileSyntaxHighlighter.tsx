import FileIcon from "./svg/File";

interface IProps {
  fileName: string;
}

const FileSyntaxHighlighter = ({ fileName }: IProps) => {
  return (
    <div className="flex item-center">
      <span className="mr-2">
        <FileIcon />
      </span>
      <span>{fileName}</span>
    </div>
  );
}

export default FileSyntaxHighlighter;