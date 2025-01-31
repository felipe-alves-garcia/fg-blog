//-----models-----//

const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const { engine } = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");
const flash = require("connect-flash");
const session = require("express-session");

//-----Configuração Models-----//

    //session e flash
    app.use(session({
        secret:"fgblog12321",
        resave:true,
        saveUninitialized:true
    }));
    app.use(flash());

    //bodyParser
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());

    //Middlewares
    app.use((req, res, next) => {

        next();
    })

    //Public
    app.use(express.static(path.join(__dirname, "public")));

    //Handlebars
    app.engine("handlebars", engine({defaultLayout: "main"}));
    app.set("view engine", "handlebars");

//-----Rotas-----//

app.get("/", (req, res) => {
    res.send("Home");
})

//-----Exportação-----//

module.exports = app;