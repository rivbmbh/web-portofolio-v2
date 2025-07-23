import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

const Cursor = () => {
  const cursorRef = useRef(null);
  const textRef = useRef(null);
  const [caption, setCaption] = useState("");

  useGSAP(() => {
    const cursor = cursorRef.current;
    const text = textRef.current;

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 2.2,
        ease: "back.out(1.7)",
      });

      const target = document.elementFromPoint(e.clientX, e.clientY);
      if (!target) {
        setCaption("");
        shrinkCursor();
        return;
      }
      const tag = target.tagName.toLowerCase();

      if (tag === "img") {
        setCaption("View");
        enlargeCursor();
      } else if (tag === "button" || tag === "a") {
        setCaption("Click");
        enlargeCursor();
      } else {
        setCaption("");
        shrinkCursor();
      }
    };

    const enlargeCursor = () => {
      gsap.to(cursor, { scale: 2, duration: 0.3, ease: "power2.out" });
      gsap.to(text, { opacity: 1, duration: 0.3 });
    };

    const shrinkCursor = () => {
      gsap.to(cursor, { scale: 1, duration: 0.3, ease: "power2.out" });
      gsap.to(text, { opacity: 0, duration: 0.3 });
    };

    window.addEventListener("mousemove", moveCursor);
    // const imgs = document.querySelectorAll("img");
    // const buttons = document.querySelectorAll("button");
    // const anchors = document.querySelectorAll("a");
    // imgs.forEach((img) => {
    //   img.addEventListener("mouseenter", enlargeCursor);
    //   img.addEventListener("mouseleave", shrinkCursor);
    // });

    // buttons.forEach((btn) => {
    //   btn.addEventListener("mouseenter", enlargeCursor);
    //   btn.addEventListener("mouseleave", shrinkCursor);
    // });

    // anchors.forEach((a) => {
    //   a.addEventListener("mouseenter", enlargeCursor);
    //   a.addEventListener("mouseleave", shrinkCursor);
    // });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      //   imgs.forEach((img) => {
      //     img.removeEventListener("mouseenter", enlargeCursor);
      //     img.removeEventListener("mouseleave", shrinkCursor);
      //   });
    };
  });

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 z-[60] flex items-center justify-center w-6 h-6 p-1 bg-gray-300 rounded-full pointer-events-none mix-blend-difference"
    >
      <span
        ref={textRef}
        className="text-sm leading-tight text-center text-black transition-opacity scale-[0.5] opacity-0"
      >
        {caption}
        {/* <img src="/assets/img/eye-cursor.png" alt="" /> */}
      </span>
    </div>
  );
};

export default Cursor;
