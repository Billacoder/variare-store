import { twMerge } from "tailwind-merge";

export default function Paragraph({
  children,
  className = "",
  hideOnMobile = false,
}) {
  return (
    <p
      className={twMerge(
        "mt-4 max-w-md text-sm leading-7 text-neutral-200",
        hideOnMobile && "hidden md:block",
        className
      )}
    >
      {children}
    </p>
  );
}