import { useEffect, useState } from "react";

export default function LoadinDots({
  text = "Loading",
  interval = 500,
  maxDots = 4,
  className = "",
}) {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setDots((prev) => (prev.length < maxDots ? prev + "." : ""));
    }, interval);

    return () => clearInterval(timer);
  }, [interval, maxDots]);

  return (
    <span className={className}>
      {text}
      {dots}
    </span>
  );
}
