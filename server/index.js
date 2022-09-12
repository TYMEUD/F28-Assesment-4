const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const { getCompliment,getFortune,getInsults,createUplift,getPositive } = require('./controller')


app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune); 
app.get('get/insults', getInsults);
app.post('/api/positive', createUplift)
app.get('/api/positive', getPositive)

app.listen(4000, () => console.log("Server running on 4000"));
