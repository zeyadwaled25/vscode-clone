import FileSyntaxHighlighter from "./components/FileSyntaxHighlighter"
import OpenedFilesBar from "./components/OpenedFilesBar"
import { fileTree } from "./data/fileTree"

const App = () => {

  return (
    <div className="app">
      <div className="flex h-screen">
        <div className="w-65 border-r border-white py-3 px-2 border-b-[1px] border-[#ffffff1f]">
          <FileSyntaxHighlighter fileTree={fileTree} />
        </div>
        <OpenedFilesBar />
      </div>
    </div>
  )
}

export default App
