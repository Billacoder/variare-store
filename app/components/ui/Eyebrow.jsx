export default function Eyebrow({ children, className = "" }) {
	return (
		<p
			className={`mb-3 text-xs uppercase tracking-[0.55em] text-white/65 ${className}`}
		>
			{children}
		</p>
	);
}