const express = require('express');
const app = express();

app.get("/", (req, res) => res.json({title:'Hello Worldd'}));

app.listen(3000, ()=> console.log('Server Started!'));