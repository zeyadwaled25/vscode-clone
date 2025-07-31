import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface IProps {
  content: string | undefined
}

const FileSyntaxHighlighter = ({ content }: IProps) => {
  if (!content) return null;
  return (
    <SyntaxHighlighter
      language="javascript"
      style={atomOneDark}
      customStyle={{
        width: "100%",
        maxHeight: "100vh",
        overflowX: "auto",
        fontSize: "1.1rem"
      }}
      showLineNumbers>
      {String(content)}
    </SyntaxHighlighter>
  );
}

export default FileSyntaxHighlighter;