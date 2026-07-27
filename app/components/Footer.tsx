import Link from "next/link";

export default function Footer() {
	return (
		<footer className="bg-neutral-100 text-black">
			<div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
				{/* Newsletter */}
				<div className="border-b border-neutral-300 pb-12 md:pb-16">
					<h2 className="text-3xl font-light md:text-4xl">
						Join Our List
					</h2>

					<p className="mt-3 text-[11px] uppercase tracking-[0.35em] text-neutral-500 md:text-sm md:tracking-wider">
						Text With Us
					</p>

					<div className="mt-8 flex flex-col gap-3 md:flex-row">
						<input
							type="email"
							placeholder="Email Address"
							className="w-full border-b border-black bg-transparent py-3 text-sm outline-none placeholder:text-neutral-500 md:flex-1"
						/>

						<button className="border border-black px-8 py-3 text-[11px] uppercase tracking-[0.25em] transition-all duration-300 hover:bg-black hover:text-white md:text-sm md:tracking-wider">
							Submit
						</button>
					</div>

					<p className="mt-4 max-w-xl text-xs leading-6 text-neutral-500">
						By signing up you agree to our Terms & Conditions, Privacy Policy,
						and Cookie Policy.
					</p>
				</div>

				{/* Links */}
				<div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
					{/* Learn */}
					<div>
						<h3 className="mb-5 text-[11px] uppercase tracking-[0.35em] text-neutral-900">
							Learn
						</h3>

						<div className="flex flex-col gap-3 text-sm text-neutral-500">
							<Link
								href="/about"
								className="transition-colors duration-300 hover:text-black"
							>
								About
							</Link>
						</div>
					</div>

					{/* Discover */}
					<div>
						<h3 className="mb-5 text-[11px] uppercase tracking-[0.35em] text-neutral-900">
							Discover
						</h3>

						<div className="flex flex-col gap-3 text-sm text-neutral-500">
							<Link
								href="/contact"
								className="transition-colors duration-300 hover:text-black"
							>
								Contact Us
							</Link>

							<Link
								href="/support"
								className="transition-colors duration-300 hover:text-black"
							>
								Support
							</Link>
						</div>
					</div>

					{/* Policies */}
					<div>
						<h3 className="mb-5 text-[11px] uppercase tracking-[0.35em] text-neutral-900">
							Policies
						</h3>

						<div className="flex flex-col gap-3 text-sm text-neutral-500">
							<Link
								href="/privacy-policy"
								className="transition-colors duration-300 hover:text-black"
							>
								Privacy Policy
							</Link>

							<Link
								href="/terms"
								className="transition-colors duration-300 hover:text-black"
							>
								Terms & Conditions
							</Link>
						</div>
					</div>

					{/* Follow */}
					<div>
						<h3 className="mb-5 text-[11px] uppercase tracking-[0.35em] text-neutral-900">
							Follow Us
						</h3>

						<div className="flex flex-col gap-3 text-sm text-neutral-500">
							<Link
								href="https://instagram.com/xbllprx"
								target="_blank"
								className="transition-colors duration-300 hover:text-black"
							>
								Instagram
							</Link>

							<Link
								href="https://facebook.com/"
								target="_blank"
								className="transition-colors duration-300 hover:text-black"
							>
								Facebook
							</Link>

							<Link
								href="https://youtube.com/"
								target="_blank"
								className="transition-colors duration-300 hover:text-black"
							>
								YouTube
							</Link>
						</div>
					</div>
				</div>

				{/* Bottom */}
				<div className="mt-12 flex flex-col gap-2 border-t border-neutral-300 pt-8 text-center text-xs text-neutral-500 md:mt-16 md:flex-row md:items-center md:justify-between md:text-sm">
					<p>© {new Date().getFullYear()} Variare. All rights reserved.</p>

					<p>Handcrafted with care.</p>
				</div>
			</div>
		</footer>
	);
}