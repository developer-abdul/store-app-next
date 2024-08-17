import mongoose from 'mongoose';

// Connect to MongoDB
const connectMongo = async () => {
	if (!process.env.MONGODB_URI) {
		throw new Error(
			'Add the MONGODB_URI environment variable inside .env to use mongoose'
		);
	}
	return mongoose.connect(process.env.MONGODB_URI).catch((e) => {
		const error = e as Error;
		console.error('Mongoose Client Error: ' + e.message);
	});
};

export default connectMongo;
