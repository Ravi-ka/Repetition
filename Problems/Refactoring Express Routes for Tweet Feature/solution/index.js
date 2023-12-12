import express from "express";
import {
  getTweets,
  createTweet,
} from "./src/features/tweet/tweet.controller.js";
const app = express();

import router from "./src/features/tweet/tweet.routes.js";

app.use('/api/tweets',router)

app.listen(5000, () => {
  console.log("server is listening at port 5000");
});
