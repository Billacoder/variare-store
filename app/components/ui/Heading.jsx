export default function Heading({ children, className = "" }) {
	return (
		<h1
			className={`text-4xl font-light leading-none tracking-tight md:text-7xl ${className}`}
		>
			{children}
		</h1>
	);
}