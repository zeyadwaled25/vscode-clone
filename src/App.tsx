import FileSyntaxHighlighter from "./components/FileSyntaxHighlighter"
import { fileTree } from "./data/fileTree"

const App = () => {

  return (
    <div className="my-5">
      <FileSyntaxHighlighter fileTree={fileTree} />
    </div>
  )
}

export default App
