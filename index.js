//init Express
const express = require("express");
//Using Express App
const app = express();
//Access control header middleware
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "OPTIONS, GET, POST, PUT, PATCH, DELETE"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    if (req.method === "OPTIONS") {
      return res.sendStatus(200);
    }
    next();
  });
//Using express json
app.use(express.json());
//Using body parser
app.use(express.urlencoded({extended: false}));
//Using App Api Router Middleware
app.use('/app-api/tasks', require("./backend/ApiRoutes/routes.js"));


//Init app default route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

//Creating the Server
app.listen(3000, () => {
    console.log("App Listen On Port, 3000");
});