// Please don't change the pre-written code
// Import the necessary modules here
const fs = require('fs')

const Solution = () => {
  
  const writeData = fs.writeFileSync('notes.txt',"The world has enough coders")
  
  const readData = fs.readFileSync('notes.txt',{encoding:'utf8'})
  console.log(readData)
 
  const appendData = fs.appendFileSync('notes.txt',' BE A CODING NINJA!')

  const readData2 = fs.readFileSync('notes.txt',{encoding:'utf8'})
  console.log(readData2)
};

Solution();
module.exports = Solution;
