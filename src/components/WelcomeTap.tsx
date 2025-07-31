import IconImg from "./IconImg";

const WelcomeTap = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <IconImg
        src="/icons/vscode.svg"
        className="w-64 h-64 transition-all duration-300 drop-shadow-[0_0_15px_#2196f3] hover:drop-shadow-[0_0_30px_#2196f3]"
      />
    </div>
  );
}

export default WelcomeTap;