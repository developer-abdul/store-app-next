import Product from '@/models/Product';
import connectMongo from '@/lib/mongoose';
import { NextResponse } from 'next/server';

type Params = {
	id: string;
};

// Retrieve a single product by ID.
export async function GET(request: Request, context: { params: Params }) {
	await connectMongo();

	try {
		const product = await Product.findById(context.params.id);

		if (!product)
			return NextResponse.json('Product not found', { status: 404 });

		return NextResponse.json(product, { status: 200 });
	} catch (e) {
		const error = e as Error;
		console.error(e);
		return new Response(error.message, { status: 500 });
	}
}

// Update a product by ID.
export async function PUT(request: Request, context: { params: Params }) {
	await connectMongo();

	const body = await request.json();

	// TODO - Do some validation

	try {
		const product = await Product.findByIdAndUpdate(context.params.id, body);
		return NextResponse.json(product, { status: 200 });
	} catch (e) {
		const error = e as Error;
		console.error(e);
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}

// Delete a product by ID.
export async function DELETE(request: Request, context: { params: Params }) {
	await connectMongo();

	try {
		const product = await Product.findByIdAndDelete(context.params.id);
		return NextResponse.json(product, { status: 200 });
	} catch (e) {
		const error = e as Error;
		console.error(e);
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
