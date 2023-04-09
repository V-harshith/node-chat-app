const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put{
      'https://api.chatengine.com/users/',
      { username:username,secret:username,first_name:username },
      {headers:{"private-key": "f518b35f-c575-4289-80e5-7b18309e0f65"}}

  } 
  return res.status(r.status).json(r.data);


  catch (e) {
  
  }

  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);