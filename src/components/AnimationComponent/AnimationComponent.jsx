import { useEffect } from "react";
import "./AnimationComponent.css";
const AnimationComponent = () => {
  useEffect(() => {
    const chars = ["C#", ".JAVA", ".C", ";", ".CPP", ".PY", ".JS", "JSX", "Go"];

    const init = () => {
      const container = document.createElement("div");
      container.className = "animation-container";
      document.body.appendChild(container);
      window.setInterval(add, 100);
    };

    const add = () => {
      const element = document.createElement("span");
      document.querySelector(".animation-container").appendChild(element);
      animate(element);
    };

    const animate = (element) => {
      const character = chars[Math.floor(Math.random() * chars.length)];
      const duration = Math.floor(Math.random() * 15) + 1;
      const offset = Math.floor(Math.random() * (350 - duration * 2)) + 3;
      const size = 10 + (20 - duration);
      element.style.cssText = `right:${offset}vw; font-size:${size}px; animation-duration:${duration}s`;
      element.innerHTML = character;
      window.setTimeout(() => remove(element), duration * 1000);
    };

    const remove = (element) => {
      element.parentNode.removeChild(element);
    };

    init();
    return () => {
      const container = document.querySelector(".animation-container");
      container.parentNode.removeChild(container);
    };
  }, []);

  return null;
};

export default AnimationComponent;
