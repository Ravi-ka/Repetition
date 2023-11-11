// Write your code here
import path from 'path';
import fs from 'fs';


export function writeBlog(absolutePath,inputBlog){
    const writeFile = fs.writeFileSync(absolutePath,inputBlog)
}


export function publishBlog(absolutePath){
    const readFileBlog = fs.readFileSync(absolutePath,{encoding:'utf8'})
    return readFileBlog;
    //console.log(readFileBlog) ;
}