import OpenedFilesBar from "./components/OpenedFilesBar"
import { fileTree } from "./data/fileTree"
import RecursiveComponent from "./components/RecursiveComponent"
import ResizablePanel from "./components/ResizablePanel"

const App = () => {

  return (
    <div className="app">
      <div className="flex h-screen">
        <ResizablePanel
          leftSide={
            <div className="w-65 py-3 px-2">
              <RecursiveComponent fileTree={fileTree} isRoot={true} />
            </div>
          }
          rightSide={<OpenedFilesBar />}
        />
      </div>
    </div>
  )
}

export default App
