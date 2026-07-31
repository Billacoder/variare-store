import Link from "next/link";

export default function Logo({
	href = "/",
	className = "",
	children = "Variare",
}) {
	return (
		<Link
			href={href}
			className={`text-sm uppercase tracking-[0.2em] ${className}`}
		>
			{children}
		</Link>
	);
}