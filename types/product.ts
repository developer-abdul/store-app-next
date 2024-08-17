type IProduct = {
	_id?: string;
	name: string;
	description?: string;
	price: { $numberDecimal: string };
	imageUrl?: string;
	category?: string;
	stock?: number;
	createdAt?: Date;
	updatedAt?: Date;
};
