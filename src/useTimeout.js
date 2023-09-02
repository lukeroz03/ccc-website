import { useEffect } from "react";

function useTimeout(callback, delay) {
  useEffect(() => {
    const timer = setTimeout(() => {
      callback();
    }, delay);
    return () => clearTimeout(timer);
  }, [callback, delay]);
}

export default useTimeout;

 /* useTimeout is a function that takes two parameters: `callback ` and `delay`.
 `callback` is a function to be executed after a delay of x milliseconds, specified by `delay`.
 The function called by `useEffect` will be executed whenever `callback` or `delay` changes.
 A timer is created using `setTimeout`, which executes `callback` after x milliseconds, specified by `delay`.

 `toggleVisibility` is `callback`

function Flasher() {
  const [isVisible, setIsVisible] = useState(true);
  const toggleVisibility = () => {
    setIsVisible((prevVisible) => !prevVisible);
  };

  useTimeout(toggleVisibility, 500);

  return <span>{isVisible && <span className="flasher">_</span>}</span>;
} */