import useTimeout from "./useTimeout";
import { useState } from "react";

function Flasher() {
  const [isVisible, setIsVisible] = useState(true);
  const toggleVisibility = () => {
    setIsVisible((prevVisible) => !prevVisible);
  };

  useTimeout(toggleVisibility, 500);

  return <span>{isVisible && <span className="flasher">_</span>}</span>;
}

export default Flasher;
