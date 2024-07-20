const express=require("express")
const path=require("path")
const bodyParser = require('body-parser');
const session=require("express-session")
require('dotenv').config();


const {engine} = require('express-handlebars');

//user defined
const authRouter=require("./route/authentication")

const app=express()


const PORT=3000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(express.static('public'))
app.use(session(
    {
        secret:process.env.SECRET_KEY,
        resave:true,
        saveUninitialized:true,
        cookie: {
            maxAge: 30 * 24 * 60 * 60 * 1000 // 1 month in milliseconds
        }
    }
))
app.use('/',authRouter)

//set formdata handler logic here


app.engine('hbs', engine({ extname: '.hbs', defaultLayout: 'layout', layoutsDir: path.join(__dirname, 'views', 'layouts'), partialsDir: path.join(__dirname, 'views', 'partials') }));
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'hbs')



app.listen(PORT,()=> console.log(`Running On Port ${PORT}`))



