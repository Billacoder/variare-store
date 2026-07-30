type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionLabel({
  children,
  className = "",
}: SectionLabelProps) {
  return (
    <p
      className={`text-[11px] uppercase tracking-[0.45em] text-neutral-400 ${className}`}
    >
      {children}
    </p>
  );
}