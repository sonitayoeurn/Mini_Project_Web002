import NavBar from "@/components/NavBar"
import "./globals.css"
import { Inter } from "next/font/google"
import Footer from "@/components/Footer"
import { Suspense } from "react"
import Loading from "./Loading"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
	title: "About us - ISTAD | Sell and Discover Products",
	description: "ISTAD is a leading online marketplace for selling and discovering high-quality products. Learn more about our company and mission.",
	openGraph: {
	  type: "website",
	  url: "/about",
	  title: "About us - ISTAD | Sell and Discover Products",
	  description: "ISTAD is a leading online marketplace for selling and discovering high-quality products. Learn more about our company and mission.",
	},
  };

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<NavBar />
				<Suspense fallback= {<Loading />} >
				{children}
				</Suspense>
				<Footer />
			</body>
		</html>
	)
}
