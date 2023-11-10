import readline from "readline"

const interfaceRL = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

interfaceRL.question('Enter the first number: ',(num1)=>{
  interfaceRL.question('Enter the second number: ',(num2)=>{
   
    if(Number(num1) > Number(num2)){
      console.log('The maximum of the two number is: '+Number(num1))
    }
    else{
      console.log('The maximum of the two number is: '+Number(num2))
    }
  })
})