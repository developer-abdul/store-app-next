'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

type Props = {
	type: 'create' | 'edit';
	product?: IProduct;
};
const ManageProduct = ({ type, product }: Props) => {
	const [sucMsg, setSucMsg] = useState('');
	const [errMsg, setErrMsg] = useState('');

	type IFormInput = IProduct;

	type IFormSubmit = IFormInput;

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
		setValue,
	} = useForm<IFormInput>({
		defaultValues: {
			name: '',
			description: '',
			imageUrl: '',
			category: '',
		},
	});

	const [id, name, description, imageUrl, category, stock, price] = watch([
		'_id',
		'name',
		'description',
		'imageUrl',
		'category',
		'stock',
		'price',
	]);

	const handleOnSubmit = async (data: IFormSubmit) => {
		setErrMsg('');
		setSucMsg('');

		if (type === 'create') {
			const result = await fetch('/api/products', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.error) {
						setErrMsg(data.error);
					} else {
						setSucMsg('Product created successfully');
					}
				});
		} else if (type === 'edit') {
			const result = await fetch(`/api/products/${id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.error) {
						setErrMsg(data.error);
					} else {
						setSucMsg('Product updated successfully');
					}
				});

			console.log('handleOnSubmit result:', result);
		}
	};

	useEffect(() => {
		if (type === 'edit') {
			setValue('_id', product?._id);
			setValue('name', product?.name!);
			setValue('description', product?.description);
			setValue('imageUrl', product?.imageUrl);
			setValue('category', product?.category);
			setValue('stock', product?.stock);
			setValue('price', product?.price!);
		}
	}, [product, setValue, type]);

	const btnSubmitText = type === 'create' ? 'Create' : 'Update';

	return (
		<form
			className="w-full max-w-3xl my-10"
			onSubmit={handleSubmit(handleOnSubmit)}
		>
			<div className="form-control grid gap-6">
				<label className="gap-6 grid grid-cols-[0.5fr_2fr]">
					<span className="text-right mt-2">Name: </span>
					<span className="flex-1">
						<input
							type="text"
							className="border-2 rounded p-2 w-full "
							defaultValue={name}
							placeholder="Samsung Smart Watch 7"
							{...register('name', {
								required: true,
							})}
						/>
						{errors.name && (
							<div className="text-red-600 text-sm">
								Please enter valid product name
							</div>
						)}
					</span>
				</label>
				<label className="gap-6 grid grid-cols-[0.5fr_2fr]">
					<span className="text-right mt-2">Description: </span>
					<span className="flex-1">
						<textarea
							rows={5}
							className="border-2 rounded p-2 w-full"
							placeholder="Description"
							defaultValue={description}
							{...register('description', {
								required: true,
							})}
						></textarea>
						{errors.description && (
							<div className="text-red-600 text-sm">
								Please enter valid product description
							</div>
						)}
					</span>
				</label>
				<label className="gap-6 grid grid-cols-[0.5fr_2fr]">
					<span className="text-right mt-2">Price($): </span>
					<span className="flex-1">
						<input
							type="number"
							className="border-2 rounded p-2 w-full "
							placeholder="12.99"
							defaultValue={price?.$numberDecimal}
							{...register('price.$numberDecimal', {
								required: true,
							})}
						/>
						{errors.price && (
							<div className="text-red-600 text-sm">
								Please enter valid product price
							</div>
						)}
					</span>
				</label>
				<label className="gap-6 grid grid-cols-[0.5fr_2fr]">
					<span className="text-right mt-2">Image Url: </span>
					<span className="flex-1">
						<input
							type="text"
							className="border-2 rounded p-2 w-full "
							placeholder="https://m.media-amazon.com/images/I/717UVXCru6L._AC_SL1500_.jpg"
							defaultValue={imageUrl}
							{...register('imageUrl', {
								required: true,
							})}
						/>
						{errors.imageUrl && (
							<div className="text-red-600 text-sm">
								Please enter valid product image url
							</div>
						)}
					</span>
				</label>
				<label className="gap-6 grid grid-cols-[0.5fr_2fr]">
					<span className="text-right mt-2">Category: </span>
					<span className="flex-1">
						<select
							className="border-2 rounded p-2 w-full "
							defaultValue={category}
							{...register('category', {
								required: true,
							})}
						>
							<option value="">Select Category</option>
							<option value="Clothing Accessory">Clothing Accessory</option>
							<option value="Computer Accessory">Computer Accessory</option>
							<option value="Mobile Accessory">Mobile Accessory</option>
							<option value="Kitchen Accessory">Kitchen Accessory</option>
							<option value="Shoes">Shoes</option>
							<option value="Others">Others</option>
						</select>
						{errors.category && (
							<div className="text-red-600 text-sm">
								Please select product category
							</div>
						)}
					</span>
				</label>
				<label className="gap-6 grid grid-cols-[0.5fr_2fr]">
					<span className="text-right mt-2">Stock Count: </span>
					<span className="flex-1">
						<input
							type="number"
							placeholder="10"
							className="border-2 rounded p-2 w-full "
							defaultValue={stock}
							{...register('stock', {
								required: true,
							})}
						/>
						{errors.stock && (
							<div className="text-red-600 text-sm">
								Please enter valid product stock count
							</div>
						)}
					</span>
				</label>
			</div>
			<div className="form-control grid gap-6 ">
				<div className="gap-6 grid grid-cols-[0.5fr_2fr]">
					<div></div>
					<div className="flex gap-4 mt-10 mb-4 text-lg">
						<button className="btn bg-blue-600 text-white rounded px-4 py-1 w-full max-w-[130px]">
							{btnSubmitText}
						</button>
						<Link
							href={'/'}
							className="btn bg-gray-600 text-white rounded px-4 py-1"
						>
							Cancel
						</Link>
					</div>
				</div>
				<div className="gap-6 grid grid-cols-[0.5fr_2fr]">
					<div></div>
					{errMsg && <div className="text-red-600 font-bold text-base">{errMsg}</div>}
					{sucMsg && <div className="text-green-600 font-bold text-base">{sucMsg}</div>}
				</div>
			</div>
		</form>
	);
};

export default ManageProduct;
