// Write your code here
import path from 'path';
import { publishBlog, writeBlog } from './blogActions.js';
import readline from 'readline';

const absolutePath = path.resolve('myblog.txt')

const rl = readline.createInterface({
    input: process.stdin,
  output: process.stdout,
})
rl.question('Enter your Blog : ',(inputBlog)=>{
    console.log(inputBlog)
    writeBlog(absolutePath,inputBlog)
    rl.close;
    
})
console.log(publishBlog(absolutePath))



