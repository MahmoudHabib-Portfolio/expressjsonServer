//init Express
const express = require("express");
//Using Express App
const app = express();

//Using express json
app.use(express.json());
//Using body parser
app.use(express.urlencoded({extended: false}));
//Using App Api Router Middleware
app.use('/app-api', require("./backend/ApiRoutes/routes.js"));


//Init app default route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

//Creating the Server
app.listen(3000, () => {
    console.log("App Listen On Port, 3000");
});