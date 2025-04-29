import { AnimatePresence, motion } from "framer-motion";
import Card from "../../UI/card/Card";
import Title from "../../UI/Text/Title/Title";
import classes from "./ThemeCard.module.css";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";

const ThemeCard = ({ darkMode, setDarkMode }) => {
  return (
    <Card className={classes.themeCard}>
      <div className={classes.themeRow}>
        <Title>Theme</Title>
        <div className={classes.themeInputContainer}>
          <input
            type="checkbox"
            id="theme"
            className={classes.themeInput}
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <label htmlFor="theme">
            <div className={classes.themeIcon}>
              <AnimatePresence mode="popLayout">
                {darkMode ? (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    exit={{ rotate: -90, scale: 0 }}
                  >
                    <BsFillMoonStarsFill />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    exit={{ rotate: 90, scale: 0 }}
                  >
                    <BsSunFill />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </label>
        </div>
      </div>
    </Card>
  );
};

export default ThemeCard;
