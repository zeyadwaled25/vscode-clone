import OpenedFilesBar from "./components/OpenedFilesBar"
import { fileTree } from "./data/fileTree"
import RecursiveComponent from "./components/RecursiveComponent"

const App = () => {

  return (
    <div className="app">
      <div className="flex h-screen">
        <div className="w-65 border-r border-[#64646473] py-3 px-2 border-b-[1px] border-[#64646473]">
          <RecursiveComponent fileTree={fileTree} isRoot={true} />
        </div>
        <OpenedFilesBar />
      </div>
    </div>
  )
}

export default App
