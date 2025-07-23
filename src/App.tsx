import FileSyntaxHighlighter from "./components/FileSyntaxHighlighter"
import { fileTree } from "./data/fileTree"

const App = () => {

  return (
    <div>
      <FileSyntaxHighlighter fileName="index.tsx" />
      {
        fileTree.children?.map((file, index) => (
          <FileSyntaxHighlighter key={index} fileName={file.name} />
        ))
      }
    </div>
  )
}

export default App
