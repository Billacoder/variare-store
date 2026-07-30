import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "filled" | "outline" | "outlineDark";
};

export default function Button({
  href,
  children,
  variant = "filled",
}: ButtonProps) {
  const styles = {
    filled:
      "bg-white text-black hover:bg-neutral-200",

    outline:
      "border border-white/80 text-white hover:bg-white hover:text-black",

      outlineDark:
      "border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white",
  };

  return (
    <Link
      href={href}
      className={`px-5 py-3 text-center text-[10px] uppercase tracking-[0.5em] transition-all duration-300 md:px-6 md:text-xs md:tracking-[0.35em] ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}