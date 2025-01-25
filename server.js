import express from "express";
import dotenv from "dotenv";
import ConnectDb from "./config/db.js";
import morgan from "morgan";
import authRoutes from "./routes/Authroutes.js";
import cors from "cors"
import categoryRoutes from "./routes/categoryRoutes.js"
import productRoutes from "./routes/productRoutes.js"

// Load environment variables
dotenv.config();

// Connect to database
ConnectDb();

const app = express();

// Use Morgan middleware to log HTTP requests
app.use(morgan("dev"));

// Middleware for JSON parsing
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use((req, res, next) => {
    console.log("📩 Incoming Request Body:", req.body);
    next();
});
app.use(cors())


//routes
app.use("/api/v1/auth",authRoutes)
app.use("/api/v1/category",categoryRoutes)
app.use("/api/v1/product",productRoutes)
app.get("/", (req, res) => {
    res.send({
        Message: "Welcome to Ecommerce"
    });
});
// app.post("/xyz",(req,res)=>{
//     const {name} = req.params;
//     console.log(name);
//     res.redirect("/");
// })


const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});

