import Link from "next/link";

export default function Footer() {
	return (
		<footer className="bg-neutral-100 text-black">
			<div className="mx-auto max-w-7xl px-8 py-16">
				{/* Newsletter */}
				<div className="border-b border-neutral-300 pb-16">
					<h2 className="text-3xl">Join Our List</h2>

					<p className="mt-2 text-sm uppercase tracking-wider text-neutral-500">
						Text With Us
					</p>

					<div className="mt-8 flex flex-col gap-4 md:flex-row">
						<input
							type="email"
							placeholder="Email Address"
							className="flex-1 border-b border-black bg-transparent py-3 outline-none placeholder:text-neutral-500"
						/>

						<button className="border border-black px-8 py-3 text-sm uppercase transition hover:bg-black hover:text-white">
							Submit
						</button>
					</div>

					<p className="mt-4 max-w-xl text-xs text-neutral-500">
						By signing up you agree to the Terms & Conditions, Privacy Policy,
						and Cookie Policy.
					</p>
				</div>

				{/* Footer Links */}
				<div className="mt-16 grid grid-cols-2 gap-12 md:grid-cols-4">
					{/* Learn */}
					<div>
						<h3 className="mb-5 text-sm uppercase tracking-wider">Learn</h3>

						<div className="flex flex-col gap-3 text-neutral-500">
							<Link href="/about">About</Link>
							{/* <Link href="/faq">FAQs</Link> */}
							{/* <Link href="/loyalty">The Variare Loyalty Program</Link> */}
						</div>
					</div>

					{/* Discover */}
					<div>
						<h3 className="mb-5 text-sm uppercase tracking-wider">Discover</h3>

						<div className="flex flex-col gap-3 text-neutral-500">
							{/* <Link href="/locations">Locations</Link> */}
							<Link href="/contact">Contact Us</Link>
							<Link href="/support">Support</Link>
							{/* <Link href="/app">Variare App</Link> */}
						</div>
					</div>

					{/* Policies */}
					<div>
						<h3 className="mb-5 text-sm uppercase tracking-wider">Policies</h3>

						<div className="flex flex-col gap-3 text-neutral-500">
							{/* <Link href="/cookie-policy">Cookie Policy</Link> */}
							<Link href="/privacy-policy">Privacy Policy</Link>
							<Link href="/terms">Terms & Conditions</Link>
							{/* <Link href="/accessibility">Accessibility</Link> */}
						</div>
					</div>

					{/* Follow */}
					<div>
						<h3 className="mb-5 text-sm uppercase tracking-wider">Follow Us</h3>

						<div className="flex flex-col gap-3 text-neutral-500">
							<Link href="https://instagram.com/xbllprx" target="_blank">
								Instagram
							</Link>
							<Link href="https://facebook.com/" target="_blank">
								Facebook
							</Link>
							<Link href="https://youtube.com/" target="_blank">
								YouTube
							</Link>
						</div>
					</div>
				</div>

				{/* Bottom */}
				<div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-neutral-300 pt-8 text-sm text-neutral-500 md:flex-row">
					<p>© {new Date().getFullYear()} Variare. All rights reserved.</p>

					<p>Handcrafted with care.</p>
				</div>
			</div>
		</footer>
	);
}
