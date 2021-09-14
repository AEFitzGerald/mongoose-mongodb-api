const express = require("express");
const app = express();
const port = 8000;

//connect to database configuration
require("./server/config/db.config");
//connect to all routes
app.use(express.json(), express.urlencoded({ extended: true }));

const allRoutes = require("./server/routes/jokes.routes");
allRoutes(app);


//connect to the port
app.listen(8000, () => console.log("The server is all fired up on port 8000"));