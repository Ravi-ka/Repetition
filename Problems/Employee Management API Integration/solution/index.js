import express from "express";
import empRoutes from "./routes/employee.route.js";
import cors from "cors";
const app = express();

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "*");
//   res.header("Access-Control-Allow-Headers", "*");
//   if (req.method === "OPTIONS") res.sendStatus(200);
//   next();
// });

app.use(cors());

app.use("/api/v1/emp", empRoutes);

export default app;
