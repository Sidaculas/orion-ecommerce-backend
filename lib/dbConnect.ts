import mongoose from "mongoose";

export const dbConnect = async () => {
	if (mongoose.connection.readyState >= 1) {
		console.log("Database connected");
		return;
	}
	return mongoose.connect(process.env.MONGO_URL as string);
};
