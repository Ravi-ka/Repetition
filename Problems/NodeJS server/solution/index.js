import http from "http";
import fs from "fs";
import EventEmitter from "events";
import nodemailer from "nodemailer";

class CustomEvent extends EventEmitter {
  mailSent(email) {
    this.emit("mailSent", email);
  }
}

const customEvent = new CustomEvent();

const server = http.createServer((req, res) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "codingninjas2k16@gmail.com",
      pass: "slwvvlczduktvhdj",
    },
  });

  if (req.method === "POST") {
    let data = "";

    req.on("data", (chunk) => {
      data += chunk;
    });

    req.on("end", () => {
      const { name, email, message } = JSON.parse(data);

      // Store user query in "queries.txt"
      fs.appendFile("queries.txt", `Name: ${name}, Email: ${email}, Message: ${message}\n`, (err) => {
        if (err) throw err;
        console.log("Query saved to queries.txt");
      });

      
      const mailOptions = {
        from: "codingninjas2k16@gmail.com",
        to: email, 
        subject: "Query Confirmation",
        text: `Thank you for your query, ${name}! We have received your message: ${message}`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error(error);
        } else {
          console.log(`Email sent: ${info.response}`);
          
          customEvent.mailSent(email);
        }
      });

      res.end("Query received");
    });
  } else {
    res.end("Welcome to Coding Ninjas!");
  }
});

const Solution = () => {
  customEvent.addListener("mailSent", (email) => {
    console.log(`custom event "mailSent" emitted`);
    console.log(`confirming that the email has been sent successfully to ${email}`);
  });
};

export default server;
export { server, CustomEvent, Solution };
