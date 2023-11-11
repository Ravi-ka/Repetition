// Please don't change the pre-written code
// Import the necessary modules here
import nodemailer from 'nodemailer';
import readline from 'readline';

const Solution = () => {

  const rl = readline.createInterface({
    input: process.stdin,
  output: process.stdout,
  })

  rl.question('please enter your email ',(userEmail)=>{
    const transporter =  nodemailer.createTransport({
      service:'gmail',
      auth:{
        user:'codingninjas2k16@gmail.com',
        pass:'slwvvlczduktvhdj'
      }
    })

    const mailOptions = {
      from:'codingninjas2k16@gmail.com',
      to:userEmail,
      subject:'Coding Ninjas',
      text:'The world has enough coders; be a coding ninja!'
    }

    try {
      const result = transporter.sendMail(mailOptions,)
      console.log(`Success: Email sent to ${userEmail}`)
    } catch (error) {
      console.log(error)
    }
  })
};

export default Solution;
