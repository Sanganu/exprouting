const express = require('express')
const PORT = 3000
const app = express();
const routes = require("./routing");
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(routes);
app.use(express.static("public"))

app.listen(PORT,() => {
    console.log("App listening on PORT - ",PORT);
})
