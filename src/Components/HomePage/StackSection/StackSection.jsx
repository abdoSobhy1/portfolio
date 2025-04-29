import { useEffect, useRef } from "react";
import Card from "../../UI/card/Card";
import ParHdr from "../../UI/Text/Paragarph/Header";

import classes from "./StackSection.module.css";

import nextjs from "../../../assets/images/stack/nextjs.svg";
import react from "../../../assets/images/stack/reactjs.svg";
import redux from "../../../assets/images/stack/redux.svg";
import tailwind from "../../../assets/images/stack/tailwind.svg";
import bootstrap from "../../../assets/images/stack/bootstrap.svg";
import github from "../../../assets/images/stack/github.svg";
import html from "../../../assets/images/stack/html.svg";
import css from "../../../assets/images/stack/css.svg";
import javascript from "../../../assets/images/stack/javascript.svg";
import typescript from "../../../assets/images/stack/typescript.svg";

export const StackSection = () => {
  const stackRef = useRef(null);
  const didDuplicate = useRef(false);
  useEffect(() => {
    if (didDuplicate.current) {
      return;
    }
    const stack = stackRef.current;
    const stackContent = Array.from(stack.children);
    stackContent.forEach((item) => {
      if (item.hasAttribute("data-duplicated")) {
        return;
      }
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("data-duplicated", true);
      stack.appendChild(duplicatedItem);
    });
    didDuplicate.current = true;
  }, []);

  const stackIcons = [
    nextjs,
    react,
    redux,
    tailwind,
    bootstrap,
    github,
    html,
    css,
    javascript,
    typescript,
  ];

  return (
    <Card className={classes.carouselCard}>
      <ParHdr>My Stack</ParHdr>
      <div className={classes.stackContainer}>
        <div className={classes.stack} ref={stackRef}>
          {stackIcons.map((icon, index) => (
            <div key={index} className={classes.stackCard}>
              <img src={icon} alt="icon" className={classes.stackImage} />
              <img src={icon} alt="icon" className={classes.bluredImage} />
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};
