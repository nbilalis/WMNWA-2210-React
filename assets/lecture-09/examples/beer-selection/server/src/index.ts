import subtypesRouter from "./routes/subtypes";
import typesRouter from "./routes/types";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const port = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", typesRouter);
app.use("/api", subtypesRouter);

app.listen(port, () => {
  if (process.env.ATLAS_URI) {
    try {
      mongoose.set("strictQuery", false);
      mongoose.connect(process.env.ATLAS_URI);

      const db = mongoose.connection;
      db.on("connected", () => {
        console.log("Mongoose default connection is open");
      });
      db.on("error", console.error.bind(console, "MongoDB connection error:"));
    } catch (error) {
      console.error(`MongoDB connection failed with error: ${error}`);
    }
  }

  console.log(`Server is running on port: ${port}`);
});
