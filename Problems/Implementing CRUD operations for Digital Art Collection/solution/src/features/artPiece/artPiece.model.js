export default class ArtPiece {
  constructor(id, title, artist, year, imageUrl) {
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.year = year;
    this.imageUrl = imageUrl;
  }

   static addArt(title, artist, year, imageUrl){
    const id = artData.length+1;
    const newData = {id,title,artist,year,imageUrl}
    artData.push(newData)
    return newData;
  }

  static filterArtModel(year, artist){
    const result = artData.filter((item)=>{
      return ((!year || item.year == year) && (!artist || item.artist == artist))
    })
    return result;
  }

  static getById(id){
    const result = artData.find((item)=>item.id == id)
    return result;
  }

  static updateById(id,body){
    id=Number(id)
    const index = artData.findIndex((item)=>item.id == id)
    artData[index] = {id,...body};
    console.log(artData)
    return artData[index];
  }
   static deleteById(id){
    const index = artData.findIndex((i)=> i.id === id)
    artData.splice(index,1)
  }
}


export let artData=[];