export default function AccountPage() {
	return (
		<main className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pt-32 pb-20">
			<h1 className="text-5xl font-light tracking-tight">My Account</h1>

			<p className="mt-6 max-w-md text-center leading-8 text-neutral-500">
				Sign in to manage your account, view your orders, and update your
				personal information.
			</p>

			<div className="mt-10 flex gap-4">
				<button className="rounded-full bg-black px-8 py-3 text-sm uppercase tracking-[0.25em] text-white transition hover:bg-neutral-800">
					Sign In
				</button>

				<button className="rounded-full border border-black px-8 py-3 text-sm uppercase tracking-[0.25em] transition hover:bg-black hover:text-white">
					Create Account
				</button>
			</div>
		</main>
	);
}
