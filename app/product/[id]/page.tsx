/* eslint-disable @next/next/no-img-element */
import MenuHeader from '@/components/MenuHeader';
import React from 'react';

type Params = {
	id: string;
};

const ProductPage = async ({ params }: { params: Params }) => {
	const product: IProduct = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/products/${params.id}`,
		{ cache: 'no-store' }
	)
		.then((res) => res.json())
		.catch((e) => console.error(e));

	return (
		<main className="flex min-h-screen flex-col items-center p-10">
			<MenuHeader />
			<div className="w-full text-center p-4 mb-10">
				<h1 className="text-3xl font-bold">{product?.name} - Product Page</h1>
			</div>
			<div className="z-10 w-full max-w-7xl font-mono text-sm grid lg:grid-cols-[1fr_1.5fr] gap-6">
				<div className="max-h-[500px]">
					<img
						src={product?.imageUrl}
						alt={product?.name}
						className="h-full mx-auto"
					/>
				</div>
				<div className="flex flex-col gap-6">
					<div className="text-sm italic my-2">
						<span className="py-2">{product?.category}</span>
					</div>
					<p className="text-lg font-bold">
						Price: ${parseFloat(product?.price.$numberDecimal).toFixed(2)}
					</p>
					<div
						className="text-base"
						dangerouslySetInnerHTML={{ __html: product?.description! }}
					/>
				</div>
			</div>
		</main>
	);
};

export default ProductPage;
