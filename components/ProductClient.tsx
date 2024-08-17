'use client';

import React, { useRef } from 'react';
import ProductList from './ProductList';

type Props = {
	products: IProduct[];
};
const ProductClient = ({ products }: Props) => {
	const [productsList, setProductsList] = React.useState(products);
	const searchRef = useRef<HTMLInputElement>(null);
	const priceRef = useRef<HTMLSelectElement>(null);

	const handleOnTextChange = () => {
		handleSearchFilterProducts();
	};

	const handleSearchFilterProducts = () => {
		const selectedPrice = priceRef.current?.value || '';
		const searchText = searchRef.current?.value || '';
		if (!selectedPrice && !searchText) {
			setProductsList(products);
			return;
		}

		// Filter the products by search text
		const filteredProducts = products.filter((product) => {
			return product?.name.toLowerCase().startsWith(searchText.toLowerCase());
		});

		// Then sort by price

		if (selectedPrice === '1') {
			filteredProducts.sort((a, b) => {
				return (
					parseFloat(a.price?.$numberDecimal!) -
					parseFloat(b.price?.$numberDecimal!)
				);
			});
		} else if (selectedPrice === '2') {
			filteredProducts.sort((a, b) => {
				return (
					parseFloat(b.price?.$numberDecimal!) -
					parseFloat(a.price?.$numberDecimal!)
				);
			});
		}

		setProductsList(filteredProducts);
	};

	return (
		<>
			<div className="grid items-start md:grid-cols-2 gap-5">
				<div className="text-lg text-left items-center mt-10 md:my-10 grid grid-cols-[1fr_3fr] gap-5">
					<span>Search:</span>
					<span>
						<input
							ref={searchRef}
							type="text"
							className=" border-2 rounded text-base p-2"
							placeholder="Search"
							onChange={handleSearchFilterProducts}
						/>
					</span>
				</div>
				<div className="text-lg text-left items-center mb-10 md:my-10 grid grid-cols-[1fr_3fr] gap-5">
					<span>Price:</span>
					<span>
						<select
							ref={priceRef}
							className=" border-2 rounded text-base p-2"
							onChange={handleSearchFilterProducts}
						>
							<option value=""></option>
							<option value="1">Low to High</option>
							<option value="2">High to Low</option>
						</select>
					</span>
				</div>
			</div>
			<div className="z-10 w-full max-w-7xl items-center font-mono text-sm grid md:grid-cols-2 lg:grid-cols-3 gap-6">
				{productsList &&
					productsList?.map((product, pIndex: number) => (
						<ProductList key={pIndex} product={product} />
					))}
				{productsList.length === 0 && <h1>No Products Found</h1>}
			</div>
		</>
	);
};

export default ProductClient;
