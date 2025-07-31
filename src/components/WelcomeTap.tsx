import IconImg from "./IconImg";
import { motion } from "framer-motion";

const WelcomeTap = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-[#0d1117] text-white text-center px-4">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
        Code with Confidence
      </h1>
      <div className="text-lg md:text-xl text-gray-400 max-w-md">
        <p>The best code editor, now in your browser</p>
        <p>Made with using React + Ts.</p>
      </div>
      <motion.a
        href="https://code.visualstudio.com/"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <IconImg
          src="/icons/vscode.svg"
          alt="VSCode"
          title="Click to launch VSCode vibes"
          className="w-40 md:w-52 lg:w-64 transition-all duration-300 transform cursor-pointer drop-shadow-[0_0_15px_#2196f3] hover:scale-105 hover:drop-shadow-[0_0_35px_#2196f3]"
        />
      </motion.a>
    </div>
  );
}

export default WelcomeTap;