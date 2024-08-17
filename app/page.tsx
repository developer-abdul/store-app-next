import MenuHeader from '@/components/MenuHeader';
import ProductClient from '@/components/ProductClient';

const Home = async () => {
	const products: IProduct[] = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/products`,
		{ cache: 'no-store' }
	).then((res) => res.json());

	return (
		<main className="flex min-h-screen flex-col items-center p-10">
			<MenuHeader />
			<div className="w-full text-center p-4">
				<h1 className="text-3xl font-bold">Product Home Page</h1>
			</div>
			<ProductClient products={products} />
		</main>
	);
};

export default Home;
