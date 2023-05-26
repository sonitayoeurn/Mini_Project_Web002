import React from "react"
import Image from "next/image"


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
  
const page = () => {
	return (
		<main className="flex flex-col items-center justify-between p-10">
	<div className="grid grid-cols-2 gap-8">
		<div className="col-span-6">
			<h1 className="text-2xl font-bold mb-4 text-center">About Us</h1>
			<description>
				<p className="mb-4">Welcome to [Website Name], your ultimate online destination for high-quality products and exceptional customer service. We are dedicated to providing you with an enjoyable and convenient shopping experience, offering a wide range of products to suit your needs.</p>
				<p className="mb-4">Our team of passionate professionals is committed to bringing you the latest trends and innovative products in [product category]. Whether youre looking for stylish fashion accessories, cutting-edge gadgets, or practical home essentials, weve got you covered. We believe that great products have the power to enhance your lifestyle and bring joy to your everyday routines.</p>
				<p className="mb-4">At [Website Name], we prioritize your satisfaction above all else. Our user-friendly website ensures a seamless browsing experience, and our secure checkout process guarantees a safe and reliable transaction. We value your trust in us and strive to exceed your expectations at every step of the way.</p>
				<p className="mb-4">As your go-to destination for all your [product category] needs, we are here to serve you. Our mission is to provide exceptional customer service, prompt assistance, and reliable product information. We are always ready to answer your questions and assist you in finding the perfect products to meet your requirements.</p>
				<p className="mb-4">Thank you for choosing [Website Name]. We are excited to have you as a valued customer and look forward to being a part of your shopping journey. Start exploring our vast collection today and experience the convenience, quality, and satisfaction that [Website Name] has to offer!</p>
			</description>
		</div>
		<div className="col-span-6 flex justify-center">
			<Image unoptimized width={500} height={500} src="/images/logo.png" alt="About Us Photo" style={{width: "200px"}}/>
		</div>
	</div>
</main>


	)
}

export default page
