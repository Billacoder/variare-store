type MoneyProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Money({
  children,
  className = "",
}: MoneyProps) {
  return (
    <p className={`text-[11px] tracking-[0.2em] text-neutral-400 ${className}`}>
      {children}
    </p>
  );
}