// TODO: require your ArtPiece model here
import ArtPiece from "./artPiece.model.js";
import { artData } from "./artPiece.model.js";

export default class artPiecesController{

    addNewPiece(req, res){
        const {title, artist, year, imageUrl} = req.body;
        const result = ArtPiece.addArt(title, artist, year, imageUrl)
        if(result){
            res.status(201).send(result)
        }
        else res.send('Something went wrong while adding the New item')
    }   

    filterArt(req, res){
        const year = req.query.year;
        const artist = req.query.artist;
        const filteredItem = ArtPiece.filterArtModel(year, artist)
        if(filteredItem){
            res.send(filteredItem)
        }
        else res.send('Something went wrong while filtering an item')
    }

    getArtById(req, res){
        const id = req.params.id;
        const result = ArtPiece.getById(id)
        if(result)
            res.status(200).send(result)
        else 
            res.send("Art piece not found")
    }

    updateArtById(req, res){
        const id = req.params.id;
        const body = req.body;
        console.log(body)
        const result = ArtPiece.updateById(id,body)
        res.send(result)
    }

    deleteArtById(req, res){
        const id = req.params.id;
        const artFound = ArtPiece.getById(id)
        if(!artFound){
            res.send('Not Found')
        }
        let deleteItem = ArtPiece.deleteById(id)
        res.status(204).send();
        //console.log(artData)
    }
}
