import connectMongo from '@/lib/mongoose';
import Product from '@/models/Product';
import { NextRequest, NextResponse } from 'next/server';

// Retrieve all products.
export async function GET() {
	await connectMongo();

	try {
		const products = await Product.find();
		return NextResponse.json(products, { status: 200 });
	} catch (e) {
		const error = e as Error;
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}

// Create a new product.
export async function POST(request: NextRequest) {
	await connectMongo();

	const body = await request.json();

	const { name, description, price, imageUrl, category, stock } = body;
	// TODO - Do some validation

	try {
		const product = await Product.create({
			name,
			description,
			price,
			imageUrl,
			category,
			stock,
		});

		return NextResponse.json(product, { status: 200 });
	} catch (e) {
		const error = e as Error;
		console.error(e);
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
