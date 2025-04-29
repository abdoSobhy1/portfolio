import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const PageTransition = ({ children }) => {
  const location = useLocation();
  const animationRef = useRef(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Adds smooth scrolling
    });
  }, [location.pathname]);

  const initialStyle = {
    position: "relative",
    opacity: 1,
    y: 100,
    top: 0,
    left: 0,
    maskImage:
      "radial-gradient(circle at bottom center, black 0, transparent 0)",
  };

  const animateStyle = {
    position: "relative",
    opacity: 1,
    scale: 1,
    y: 0,
    top: 0,
    left: 0,
    maskImage:
      "radial-gradient(circle at bottom center, black 2000vh, transparent 700vh)",
  };

  const exitStyle = {
    position: "absolute",
    opacity: 0,
    scale: 0.7,
    top: 0,
    left: 0,
    maskImage:
      "radial-gradient(circle at bottom center, black 2000vh, transparent 700vh)",
  };

  return (
    <AnimatePresence mode="sync">
      <motion.div
        key={location.pathname}
        initial={initialStyle}
        animate={animateStyle}
        exit={exitStyle}
        transition={{ duration: 0.8, ease: "anticipate" }}
        style={{ width: "100%", minHeight: "100dvh", padding: "1.5rem 1rem" }}
        ref={animationRef}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
