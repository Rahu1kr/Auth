import mongoose from "mongoose";


export const connectDB = async () => {
    try {
        const URL = process.env.MONGO_URL;
        await mongoose.connect(URL);
        console.log("DB Connected");
    } catch (error) {
        console.error("Failed to connect!", error)
        process.exit(0);
    }
};

// export const connectDB = async () => {
//   try {
//     if (!process.env.MONGO_URL) {
//       throw new Error("MONGO_URL environment variable is not defined.");
//     }
//     await mongoose.connect(process.env.MONGO_URL);
//     console.log("DB Connected");
//   } catch (error) {
//     console.error("Failed to connect:", error);
//     process.exit(1); // Exit with a non-zero status code to indicate an error
//   }
// };
