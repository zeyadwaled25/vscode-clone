import { fileTree } from "./data/fileTree"
import RecursiveComponent from "./components/RecursiveComponent"
import ResizablePanel from "./components/ResizablePanel"
import Preview from "./components/Preview"
import { useSelector } from "react-redux"
import type { RootState } from "./app/store"
import WelcomeTap from "./components/WelcomeTap"

const App = () => {
  const { openedFiles } = useSelector((state: RootState) => state.fileTree);

  return (
    <div className="app">
      <div className="flex h-screen">
        <ResizablePanel
          leftSide={
            <div className="w-65 py-3 px-2">
              <RecursiveComponent fileTree={fileTree} isRoot={true} />
            </div>
          }
          rightSide={openedFiles.length ? <Preview /> : <WelcomeTap />}
        />
      </div>
    </div>
  )
}

export default App
