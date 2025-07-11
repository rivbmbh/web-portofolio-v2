import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const HandPoint = ({ isSmallScreen }) => {
  return (
    <motion.div
      animate={
        isSmallScreen
          ? { y: [0, 10, 0] } // jika layar kecil, gerakan vertikal
          : { x: [0, 10, 0] } // jika normal, gerakan horizontal
      }
      transition={{
        duration: 1.8, // durasi satu siklus
        repeat: Infinity, // loop terus-menerus
        ease: "easeInOut",
      }}
    >
      <FontAwesomeIcon
        icon={faHandPointRight}
        className="text-xl text-orange-200 max-[230px]:rotate-90"
      />
    </motion.div>
  );
};

export default HandPoint;
