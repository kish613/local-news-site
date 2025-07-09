import { motion } from "framer-motion";
import logo from "../assets/logo.svg";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
      className="flex items-center px-6 py-4 bg-white shadow mb-8 rounded-b-xl"
    >
      <img src={logo} alt="News Logo" className="w-12 h-12 mr-4"/>
      <span className="font-bold text-2xl text-blue-700">Local News</span>
    </motion.header>
  );
}
