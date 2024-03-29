import React from "react";
import Image from "next/image"


async function getProductDetails(id) {
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
  const data = await res.json();
  return data;
}

export async function generateMetadata({ params }) {
  const { id } = params;
  const product = await getProductDetails(id);
  return {
    title: product.title,
    description: product.description,
    metadataBase: new URL("https://istad.co"),
    alternates: {
      canonical: "/", // canonical mean the original page
      languages: {
        "en-US": "/en-US", 
        "de-DE": "/de-DE",
      },
      
    },
    openGraph: {
      images: product.images[0],
    },
  };
}

// export async function generateStaticParams() {
//   const products = await fetch(
//     "https://api.escuelajs.co/api/v1/products?limit=10&offset=0"
//   ).then((res) => res.json());

//   return products.map((product) => ({
//     id: product.id.toString(),
//   }));
// }

export default async function ProductDetails({ params }) {
  const { id } = params;
  const product = await getProductDetails(id);
  return (
    <div className="flex items-center justify-center p-24 top-3">
      <a
        href="#"
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        {product.images && (
          <Image unoptimized width={500} height={500}
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={product.images[0]}
            alt=""
          />
        )}
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {product.title ? product.title : "Loading..."}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {product.description ? product.description : "Loading..."}
          </p>
        </div>
      </a>
    </div>
  );
}
