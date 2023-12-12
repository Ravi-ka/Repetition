import express from "express";
const router = express.Router();

// TODO: require your artPiecesController here
import artPiecesController from "./artPiece.controller.js";
const artController = new artPiecesController();

// TODO: Implement your artPieces routes here
router.post('/',artController.addNewPiece)
router.get('/',artController.filterArt)
router.get('/:id',artController.getArtById)
router.put('/:id',artController.updateArtById)
router.delete('/:id',artController.deleteArtById)

export default router;
