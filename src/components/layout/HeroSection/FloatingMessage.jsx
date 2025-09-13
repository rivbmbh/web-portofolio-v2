import { motion, AnimatePresence } from "framer-motion";

const FloatingMessage = () => {
  return (
    <>
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex items-center justify-center text-base mb-3 bg-gray-400 py-1.5 px-2 rounded-sm relative w-max -rotate-12"
      >
        <div
          className="absolute right-2 -bottom-1.5 w-0 h-0 
            border-l-[9px] border-r-[9px] border-t-[9px] 
            border-l-transparent border-r-transparent 
            border-t-gray-400"
        ></div>
        <p className="text-base">It's me</p>
      </motion.div>
    </>
  );
};

export default FloatingMessage;
