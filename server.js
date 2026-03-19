import express from "express";
import "dotenv/config";
import connectDB from "./db/connection.js";
import bookRoutes from "./routes/bookRoutes.js"; // "router"

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use("/api/books", bookRoutes); // base path

connectDB(); // start connection

app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));
