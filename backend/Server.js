//init Express
const express = require("express");
//Using Express App
const app = express();
//Serving Static Files
app.use(express.static('Public'));
//Embedding Pages
app.set('view-engine', 'ejs');
app.set("Views", './Views');
//Using express json
app.use(express.json());
//Using body parser
app.use(express.urlencoded({extended: false}));
//Using App Api Router Middleware
app.use('/app-api/tasks', require("./ApiRoutes/routes.js"));


//Init app default route
app.get('/', (req, res) => {
    res.send("<h1>Express React.js</h1>")
});

//Creating the Server
app.listen(8000, () => {
    console.log("App Listen On Port, 8000");
});