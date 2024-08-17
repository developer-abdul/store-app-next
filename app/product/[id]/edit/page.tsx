import ManageProduct from '@/components/ManageProduct';
import MenuHeader from '@/components/MenuHeader';
import React from 'react';

type Params = {
	id: string;
};

const ProductEditPage = async ({ params }: { params: Params }) => {
	const product: IProduct = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/products/${params.id}`,
		{ cache: 'no-store' }
	)
		.then((res) => res.json())
		.catch((e) => console.error(e));

	return (
		<div className="flex min-h-screen flex-col items-center p-10">
			<MenuHeader />
			<div className="w-full text-center p-4">
				<h1 className="text-3xl font-bold">Edit Product</h1>
			</div>
			<ManageProduct type="edit" product={product} />
		</div>
	);
};

export default ProductEditPage;
