import express from "express";
const app = express();

// TODO: require your artPieceRoutes here
import router from "./src/features/artPiece/artPiece.routes.js";

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))

// TODO: use your artPieceRoutes with a proper endpoint
app.use('/api/artPieces',router)

export default app;
