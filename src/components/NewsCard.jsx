import { motion } from "framer-motion";

export default function NewsCard({ news }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
      className="bg-white rounded-lg shadow-md p-5 mb-6 flex flex-col justify-between transition-all"
    >
      <h2 className="font-semibold text-xl text-blue-900">{news.title}</h2>
      <span className="text-xs text-gray-400 mt-1">{news.date}</span>
      <p className="my-3 text-gray-700">{news.summary}</p>
      <span className="text-sm text-gray-600 mt-2 italic">{news.author}</span>
    </motion.div>
  );
}
