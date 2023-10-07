
const express = require('express')
const app = express(); //returns object{ }

app.use(express.json()) //=> global middlewar runs for every route

/* 
MIDDLEWARE
-A function which has access to request and response and also next function

next function points out to upcoming valid middleware

      -global middleware
      -route level middleware
*/


function checkAuthentication(req, res, next) {
  let logged_in = true;
  if (logged_in) {
    next();
  } else {
    res.status(401).send({ msg: "not logged in" })
  }

}

// app.use(checkAuthentication)  // global middleware


/* Status code
2
3
4
  400
  401
  403
  404
5

*/
/* 
CRUD : READ CREATE UPDATE DELETE
request method =>GET POST PUT/PATCH DELETE
*/

app.get("/api/dashboard/", checkAuthentication, (req, res) => {
  console.log("inside dashboard")
  res.send({
    user: 100,
    sales: 123123,
  })
})




app.get("/", (req, res) => {
  res.send("Homepage data")
})

app.get('/api/todos', (req, res) => {
  res.send([
    { "title": "js", "status": true },
    { "title": "css", "status": false },
    { "title": "react", "status": false },

  ])
})


app.post("/api/todos", (req, res) => {
  // console.log("save new todos")


  /* link to database */
  // console.log(req.body);

  res.send({ "id": "1", "title": "reatc_new" });

})

app.listen(8000, () => {        //call back function 
  // (function passed as a variable)
  console.log("server started");
});