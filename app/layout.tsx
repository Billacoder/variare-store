import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import PageTransition from "./components/PageTransition";

import { CartProvider } from "@/app/context/CartContext";
import { WishlistProvider } from "@/app/context/WishlistContext";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-body",
});

const heading = DM_Serif_Display({
	subsets: ["latin"],
	weight: "400",
	variable: "--font-heading",
});

export const metadata: Metadata = {
	title: "Variare",
	description: "Handcrafted crochet, polaroids, and studio work.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${inter.variable} ${heading.variable} h-full antialiased`}
		>
			<body className="flex min-h-screen flex-col">
				<WishlistProvider>
					<CartProvider>
						{/* Intro Overlay */}
						<Intro />

						{/* Website */}
						<Navbar />

						<PageTransition>
							{children}
						</PageTransition>

						<Footer />
					</CartProvider>
				</WishlistProvider>
			</body>
		</html>
	);
}