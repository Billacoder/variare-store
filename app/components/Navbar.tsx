"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Heart, Handbag, CircleUserRound, Menu, X } from "lucide-react";

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const pathname = usePathname();

	const [menuOpen, setMenuOpen] = useState(false);

	const darkNavbarPages = [
		"/polaroids",
		"/studio",
		"/shop",
		"/cart",
		"/wishlist",
		"/account",
		"/best-sellers",
	];

	const darkNavbar =
		darkNavbarPages.includes(pathname) ||
		pathname.startsWith("/product") ||
		pathname.startsWith("/collection");

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
				scrolled
					? "border-b border-neutral-200 bg-white/90 text-black backdrop-blur-xl"
					: darkNavbar
						? "bg-transparent text-black"
						: "bg-transparent text-white"
			}`}
		>
			<div className="mx-auto flex h-14 md:h-20 max-w-7xl items-center justify-between px-6 md:px-8">
				{/* Logo */}
				<Link
					href="/"
					className="text-sm md:text-2xl font-light tracking-[0.18em] transition-opacity duration-300 hover:opacity-70"
				>
					Variare
				</Link>

				{/* Mobile Actions */}
				<div className="flex items-center gap-4 md:hidden">

					<Link href="/cart">
						<Handbag
							className="h-[18px] w-[18px] transition-all duration-300 hover:scale-110 hover:opacity-70"
							strokeWidth={1.7}
						/>
					</Link>
					
					<button onClick={() => setMenuOpen(!menuOpen)}>
						{menuOpen ? (
							<X className="h-5 w-5" strokeWidth={1.7} />
						) : (
							<Menu className="h-5 w-5" strokeWidth={1.7} />
						)}
					</button>
				</div>

				{/* Navigation */}
				<div className="hidden md:flex items-center gap-10">
					{[
						{ name: "Polaroids", href: "/polaroids" },
						{ name: "Crochet", href: "/" },
						{ name: "Studio", href: "/studio" },
					].map((item) => (
						<Link
							key={item.name}
							href={item.href}
							className="group relative text-sm uppercase tracking-[0.28em]"
						>
							{item.name}

							<span className="absolute -bottom-2 left-1/2 h-px w-full -translate-x-1/2 scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100" />
						</Link>
					))}
				</div>

				{/* Icons */}
				<div className="hidden md:flex items-center gap-5">
					<Link href="/wishlist">
						<Heart
							className="h-[18px] w-[18px] transition-all duration-300 hover:scale-110 hover:opacity-70"
							strokeWidth={1.7}
						/>
					</Link>

					<Link href="/cart">
						<Handbag
							className="h-[18px] w-[17px] transition-all duration-300 hover:scale-110 hover:opacity-70"
							strokeWidth={1.7}
						/>
					</Link>

					<Link href="/account">
						<CircleUserRound
							className="h-[22px] w-[22px] transition-all duration-300 hover:scale-110 hover:opacity-70"
							strokeWidth={1.7}
						/>
					</Link>
				</div>
			</div>
			{menuOpen && (
				<div
					className={`fixed top-0 right-0 z-50 h-screen w-80 bg-white text-black shadow-2xl transition-transform duration-500 md:hidden ${
						menuOpen ? "translate-x-0" : "translate-x-full"
					}`}
				>
					<div className="flex h-20 items-center justify-end px-8">
						<button onClick={() => setMenuOpen(false)}>
							<X className="h-6 w-6" strokeWidth={1.7} />
						</button>
					</div>

					<div className="flex flex-col gap-8 px-8 pt-6 text-lg">
						<Link href="/" onClick={() => setMenuOpen(false)}>
							Crochet
						</Link>

						<Link href="/polaroids" onClick={() => setMenuOpen(false)}>
							Polaroids
						</Link>

						<Link href="/studio" onClick={() => setMenuOpen(false)}>
							Studio
						</Link>

						<div className="my-4 h-px bg-neutral-200" />

						<Link href="/wishlist" onClick={() => setMenuOpen(false)}>
							Wishlist
						</Link>

						<Link href="/account" onClick={() => setMenuOpen(false)}>
							Account
						</Link>
					</div>
				</div>
			)}
		</nav>
	);
}
