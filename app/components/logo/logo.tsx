import Link from "next/link";

export default function Logo({
	href = "/",
	className = "",
	children = "Variare",
}) {
	return (
		<Link
			href={href}
			className={`text-xl font-medium tracking-[0.18em] ${className}`}
		>
			{children}
		</Link>
	);
}