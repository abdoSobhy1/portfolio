import { useEffect, useState } from "react";
import "./CustomCursor.css";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", () => {
      setClicked(true);
    });
    window.addEventListener("mouseup", () => {
      setClicked(false);
    });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const isMobile = () => {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  };

  if (isMobile()) {
    return null;
  }

  return (
    <>
      <div
        className={`cursor ${clicked ? "cursor-clicked" : ""}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      ></div>

      <div
        className={`custom-cursor ${clicked ? "cursor-clicked" : ""}`}
        style={{
          top: `${position.y}px`,
          left: `${position.x}px`,
        }}
      />
    </>
  );
};

export default Cursor;
