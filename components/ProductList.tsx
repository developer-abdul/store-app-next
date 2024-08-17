/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

type Props = {
	product: IProduct;
};

const ProductList = ({ product }: Props) => {
	return (
		<div className="p-2 border shadow-lg shadow-gray-400 cursor-pointer text-center grid gap-2 h-full">
			<Link href={`/product/${product._id}`} className="grid gap-2 h-full">
				<div className="max-h-[200px]">
					<img
						src={product.imageUrl}
						alt={product.name}
						className="h-full mx-auto"
					/>
				</div>
				<div className="text-sm italic my-2">
					<span className="p-2 bg-gray-600 text-white rounded">
						{product.category}
					</span>
				</div>
				<h1 className="text-xl font-bold">{product.name}</h1>
				<p className="text-lg font-bold">
					Price: ${parseFloat(product.price?.$numberDecimal).toFixed(2)}
				</p>
			</Link>
			<div className="flex gap-4 justify-center">
				<Link
					href={`/product/${product._id}/edit`}
					className="p-1 bg-blue-600 text-white rounded w-full max-w-[120px] h-8"
				>
					Edit
				</Link>
			</div>
		</div>
	);
};

export default ProductList;
