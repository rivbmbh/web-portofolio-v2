import { tv } from "tailwind-variants";

const hamburgerLine = tv({
  base: [
    "transition",
    "duration-300",
    "ease-in-out",
    "w-[31px]",
    "h-[2.5px]",
    "my-2",
    "block",
    "dark:bg-white",
  ],
});

const iconSosmed = tv({
  base: [
    "text-2xl hover:scale-125 active:scale-125 transition-all duration-300 ease-in-out",
  ],
});

const effectNav = tv({
  base: [
    "hover:bg-slate-300 hover:text-slate-800 active:bg-slate-300 active:text-slate-800 transition-all active:duration-100 px-1 ease-in-out duration-400 delay-200",
  ],
  variants: {
    active: {
      true: "bg-slate-300 text-slate-800",
      false: "",
    },
  },
});

export { hamburgerLine, iconSosmed, effectNav };
