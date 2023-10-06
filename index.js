
const express = require('express')
const app = express(); //returns object{ }


/* 

CRUD : READ CREATE UPDATE DELETE
request method =>GET POST PUT/PATCH DELETE
*/



// const getTodos = (request, response) => {
//   console.log("return list of todos")
//   response.send([
//     { "title": "js", "status": true },
//     { "title": "css", "status": false },

//   ])
// }


app.get("/", (req, res) => {
  res.send("Homepage data")
})

app.get('/api/todos', (req, res) => {
  res.send([
    { "title": "js", "status": true },
    { "title": "css", "status": false },
    { "title": "react", "status": false },

  ])
});

app.listen(8000, () => {        //call back function 
  // (function passed as a variable)
  console.log("server started");
});