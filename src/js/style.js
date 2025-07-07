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

const icon = tv({
  base: ["text-slate-300/70 group-hover:text-white"],
});

const iconList = tv({
  base: [
    "bg-transparent py-1 px-2 flex justify-center items-center rounded-full border border-slate-300 hover:bg-hover transition-colors duration-300 ease-in-out",
  ],
});

export { hamburgerLine, icon, iconList };
