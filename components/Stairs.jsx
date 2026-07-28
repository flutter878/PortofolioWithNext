import { motion } from "framer-motion";

const stairVariants = {
  initial: { top: "0%" },
  animate: { top: "100%" },
  exit: { top: ["100%", "0%"] },
};

const reverseIndex = (index) => 5 - index;

const Stairs = () => (
  <>
    {[...Array(6)].map((_, index) => (
      <motion.div
        key={index}
        variants={stairVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          delay: reverseIndex(index) * 0.1,
        }}
        className="h-full flex-1 bg-emerald-500 relative"
      />
    ))}
  </>
);

export default Stairs;