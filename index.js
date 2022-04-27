import dotenv from 'dotenv';
import express from 'express';
import connectDatabase from "./config/MongoDb.js";
import ImportData from "./DataImport.js";
import reportRoute from "./Routes/reportRoutes.js";
import { errorHandler, notFound } from "./Middleware/Errors.js";
import userRouter from "./Routes/UserRoutes.js";
import mongoose from "mongoose";

const app = express();

dotenv.config();
connectDatabase();

// mongoose.connect(
//     process.env.MONGO_URL,
//     {
//         useCreateIndex: true,
//         useFindAndModify: false,
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     },
//     (err) => {
//         if (err) throw err;
//         console.log("db connected");

//         
//     }
// )


// const path = require('path');
// if(process.env.NODE_ENV === "production") {
//     app.use(express.static("public"));
//     app.get("*", (req, res) => {
// res.sendFile(path.resolve(__dirname, "public", "index.html"));

//     });
// }

const port = process.env.PORT;


app.use(express.json());

// API
app.use("/api/import", ImportData);
app.use("/api/reports", reportRoute);
app.use("/api/users", userRouter);


// ERROR HANDLER
app.use(notFound);
app.use(errorHandler);

let server = app.listen(port, () => {
    console.info(`Server running at ${port}`);
  });

module.exports = server