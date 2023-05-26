
import Card from "@/components/Card"
import CategoryCard from "@/components/CategoryCard"
import UserCard from "@/components/UserCard"
import Link from "next/link"
import Image from "next/image"




// set static meta data
// export const metadata = {
// 	title: "ISTAD - Home",
// 	description: 'This is my app',
// 	images: "/images/alien.png",
	
	
// 	openGraph: {
// 	  title: 'ISTAD-HOME',
// 	  description: 'This is my app',
// 	  url: 'https://next-v13-with-form-upload-file.vercel.app/',
// 	  images: "/images/alien.png",
// 	},
// 	twitter: {
// 	  title: 'My App',
// 	  description: 'This is my app',
// 	  url: 'https://myapp.com',
// 	  image: 'https://myapp.com/og.png',
// 	}

	
// }
export const metadata = {
	title: "Home - ISTAD",
	description: "Find a wide range of high-quality products for sale at ISTAD.",
	images: "/images/we.jpg",
	
	openGraph: {
	  title: "Buy Products Online - ISTAD",
	  description: "Find a wide range of high-quality products for sale at ISTAD.",
	  url: "https://mini-project-web002.vercel.app/",
	  images: "/images/we.jpg",
	},
	twitter: {
	  title: "Buy Products Online - ISTAD",
	  description: "Find a wide range of high-quality products for sale at ISTAD.",
	  url: "https://mini-project-web002.vercel.app/",
	  image: "/images/we.jpg",
	},
  };
  


export async function fetchData() {
	const res = await fetch(
		"https://api.escuelajs.co/api/v1/products?limit=20&offset=0",
		{cache: "no-store" }
	)
	const data = await res.json()
	return data
}
// fecth category
export async function getCategory() {
	const res = await fetch("https://api.escuelajs.co/api/v1/categories")
	const data = await res.json()
	console.log(data)
	return data
}

export async function getuser() {
	const res = await fetch("https://api.escuelajs.co/api/v1/users?limit=8")
	const data = await res.json()
	return data
}
// sort product by id desc and limit 20
// export function sortProduct(products) {
// 	return products.sort((a, b) => b.id - a.id).slice(0, 20)
// }

export default async function Home() {
	//  call function
	const products = await fetchData()
	const categories = await getCategory()
	const users = await getuser()

	// const sortedProducts = sortProduct(products)

	// filter product by name
	// const filteredProducts = products.filter((p)=>
	// p.title && p.title.toLowerCase().includes(query.toLowerCase())
	// )

	return (
		<main className='w-[90%] mx-auto'>
			
			<Link
				href={"/product/upload"}
				className=' fixed right-1 bottom-1 z-50 p-5'
			>
				<Image unoptimized width={500} height={500}
					className='w-10 md:w-20'
					src='/images/add.png'
					alt="add product"
				/>
			</Link>


			{/* banner section */}
			

			{/* end of banner */}

			<h4 className='font-bold text-center my-7 text-3xl'>Our users</h4>

				<div className=' w-full justify-center flex flex-wrap gap-3 '>
					
					{users.map((u) => (
						<UserCard
							key={u.id}
							image={u.avatar}
							email={u.email}
							name={u.name}
						/>
					))}
				</div>
			{/* list of category */}
			<h1 className='text-3xl font-bold my-4'> Category list</h1>
			<div className='flex space-x-3 flex-wrap'>
				{categories.map((cate) => (
					<CategoryCard
						key={cate.id}
						thubmnail={cate.image}
						title={cate.name}
						id={cate.id}
					/>
				))}
			</div>

			{/* list product  */}
			<h1 className='font-bold text-2xl my-7'>Our Products {products.length} </h1>
		

			<div > 
				<div className='flex flex-wrap justify-center  mx-auto gap-3 w-full '>
					{products.map((product) => (
						<Card
						key={product.id}
						id={product.id}
						title={product.title}
						price={product.price}
						image={product.images[0]}
						/>
					))}
				</div>
				
				
			</div>
		</main>
	)
}
