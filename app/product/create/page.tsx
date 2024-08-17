import ManageProduct from '@/components/ManageProduct';
import MenuHeader from '@/components/MenuHeader';
import Link from 'next/link';
import React from 'react';

const ProductCreatePage = () => {
	return (
		<div className="flex min-h-screen flex-col items-center p-10">
			<MenuHeader />
			<div className="w-full text-center p-4">
				<h1 className="text-3xl font-bold">Create New Product</h1>
			</div>
			<ManageProduct type="create" />
		</div>
	);
};

export default ProductCreatePage;
