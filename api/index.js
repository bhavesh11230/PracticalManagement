import express from "express";
import dotenv from "dotenv";
import router from "../routers/feedbackRouter.js";
import dbConnect from "../config/database.js";




const app = express();

const PORT = 4000;  


app.use(express.json());


app.use("/api/v1", router);

dotenv.config();

dbConnect();

app.get("/",(req, res) => {
  res.json({
    "success": true,
    "message": "server running successfully!",
  })
})


app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
