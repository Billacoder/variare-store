export default function Heading({ children, className = "" }) {
	return (
		<h1
			className={`text-3xl font-light leading-none tracking-tight  ${className}`}
		>
			{children}
		</h1>
	);
}