import Card from "@/components/Card"
import React from "react"

// fecht product by category
export async function getProductByCategory(id) {
	const res = await fetch(
		`https://api.escuelajs.co/api/v1/products/?categoryId=${id}`
	)
	const data = await res.json()
	return data
}

// get category by id
export async function getCategoryById(id) {
	const res = await fetch(`https://api.escuelajs.co/api/v1/categories/${id}`)
	const data = await res.json()
	return data
}

export async function generateMetadata({ params }) {
	const id = params.id
	const category = await getCategoryById(id)
	return {
		title: category.name,
		description: category.name,
		image: category.image,
		openGraph: {
			type: "website",
			url: `https://escuelajs.co/category/${id}`,
			title: category.name,
			description: category.name,
			images: [
				{
					url: category.image,
					width: 800,
					height: 600,
				},
			],
		},
	}
}

const page = async ({ params }) => {
	const { id } = params
	console.log(id)

	const productByCategory = await getProductByCategory(id)
	console.log(productByCategory)

	// call fetch category by id
	const categoyById = await getCategoryById(id)

	return (
		<div className='w-[90%] mx-auto'>
			<h1 className='text-center text-4xl font-bold my-5 w-full'>
				{categoyById.name}{" "}
			</h1>
			<div className='flex flex-wrap justify-center gap-5'>
				{productByCategory.length < 1 ? (
					<p className='text-center'>
						{" "}
						There are no product available for {categoyById.name}
					</p>
				) : (
					productByCategory.map((product) => {
						return (
							<Card
								key={product.id}
								title={product.title}
								price={product.price}
								image={product.images[0]}
							/>
						)
					})
				)}
			</div>
		</div>
	)
}

export default page
