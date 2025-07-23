import FileSyntaxHighlighter from "./components/FileSyntaxHighlighter"

const App = () => {

  return (
    <div>
      <FileSyntaxHighlighter fileName="index.tsx" />
      <FileSyntaxHighlighter fileName="index.html" />
    </div>
  )
}

export default App
