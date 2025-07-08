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
    "text-2xl group-hover:scale-125 transition-all duration-300 ease-in-out",
  ],
});

export { hamburgerLine, iconSosmed };
