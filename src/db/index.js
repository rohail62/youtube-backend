import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const DBConnection = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(`MongoDB connected! HOST: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // exit if DB fails
  }
};

export default DBConnection;





// import mongoose from "mongoose";
// import { DB_NAME } from "../constants.js";

// const DBConnection=async ( )=> {
//     try {
//         const connectionInstances=await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME }`)
//         console.log(`mongodb connected !! HOST : ${connectionInstances.connection.host}`)
//     } catch (error) {
//         console.log(`mongo connection error`,error);
//       process.exit(1);
        
//     }
// }
// export default DBConnection;