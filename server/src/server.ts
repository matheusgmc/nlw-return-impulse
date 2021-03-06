require("dotenv").config();
import express from "express";
import cors from "cors";
import { router } from "./routes";
//PORT
const PORT = process.env.PORT || 3333;

const app = express();

app.use(cors());
app.use(express.json());

app.use(router);

app.listen(PORT, () => console.log("Server started on port 3333"));
