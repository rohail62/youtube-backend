import dotenv from "dotenv";
import express from "express";
import DBConnection from "./db/index.js";

// Load env variables
dotenv.config({ path: "./.env" });

const app = express();
const PORT = process.env.PORT || 8000;

// Connect DB
DBConnection();

// Basic route
app.get("/", (req, res) => {
  res.send(" Server is running and DB connected!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});





// import dotenv from "dotenv";
// import { DBConnection} from "./db/index.js";

// dotenv.config({path:"./env"});




// DBConnection()

/*
import express from "express";
const app =express();

(  async ()=>{
try {
   await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
    app.on("errror",(error)=>{
        console.log("errr: ", error);
        throw error
    })
    app.listen(process.env.PORT, ()=>{
        console.log(`app is listening live on port ${process.env.PORT}`);
        
    })
} catch (error) {
    console.error("errror: ",error);
    throw err
}

}

)*/