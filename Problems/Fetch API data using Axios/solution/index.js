// Please do not change the prewritten code
//import axios from "axios";
const axios = require('axios')

const Solution = async () => {
  axios.get('https://api.codingninjas.com/api/v3/event_tags')
  .then(response =>{
    console.log(response.data)
  })
  .catch(err =>{
    console.log(err)
  })
};
Solution();
module.exports = Solution;
