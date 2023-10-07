const http = require("http")
const fs = require("fs")
const path = require("path")


const express = require("express")
const app = express()

/* middleware - a function which has access to req and response and also has access to next middleware
  -global middleware
  -route level middleware
*/

/* status
2- 201, 202,203,204
3- redirect website
4-  400
    401- unauthincated
    403 - forbidden
    404 - 
405
5- 500   

*/

function checkAuthentication(req, res, next) {
  let is_logged_in = true;
  if (is_logged_in) {
    console.log("Check Auth")
    next()
    return;
  }

  res.status(401).send({ msg: "unauthinacted" })

}


function checkisBuyer(req, res, next) {
  console.log("checkisBuyer");
  let is_buyer = false;
  if (is_buyer) {
    next()
  }
  else {
    res.status(403).send({ msg: " Access denied : only for buyers" })
  }

}

// app.use(checkAuthentication)  // global middlware
// app.use(checkisBuyer)            // global middlware


app.get("/api/orders/", checkAuthentication, checkisBuyer, (req, res) => { //checkAuthentication, checkisBuyer route level middleware
  res.send("orders")
})


app.get("/api/products/", (req, res) => {
  console.log("send products");
  //products = DB:Products
  res.send({
    data: [
      { id: "1", name: "computer" },
      { id: "2", name: "laptop" },
    ]
  })
})

app.use((req, res) => {
  // res.sendFile(path.join(path.resolve(), 'index-1.js')) // to send a file as error message
  // return;
  res.status(404).send({ msg: "Resouse not found" })
})


app.listen(5000, () => {
  console.log("server starteddd");
})