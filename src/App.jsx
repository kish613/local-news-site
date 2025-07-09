import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import { motion } from "framer-motion";

function App() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-blue-100"
    >
      <Header />
      <div className="max-w-xl mx-auto w-full p-6">
        <Home />
      </div>
    </motion.main>
  );
}

export default App;
