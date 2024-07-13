const express=require("express")
const path=require("path")
const {engine} = require('express-handlebars');

//user defined
const productListing=require('./productLister')

const app=express()


const PORT=3000

app.use(express.static('public'))

app.engine('hbs', engine({ extname: '.hbs', defaultLayout: 'layout', layoutsDir: path.join(__dirname, 'views', 'layouts'), partialsDir: path.join(__dirname, 'views', 'partials') }));
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'hbs')

app.get('/',(req,res)=>{
    res.render('Home',{
        productListing:productListing
    })
})


app.listen(PORT,()=> console.log(`Running On Port ${PORT}`))



