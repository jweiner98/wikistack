// Declarations
const morgan = require('morgan');
const express = require('express')
const layout = require('./views/layout')
const app = express();

// Middleware
app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));


//Routes

app.get("/",(req, res) => {
  try {
    res.send(layout("hello-world"))

  } catch (error) {

  }
});


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});

