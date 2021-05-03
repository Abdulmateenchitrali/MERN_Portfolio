const express=require("express");
const app=express();
const path=require('path');
const handlebars=require('hbs');
const port=process.env.PORT || 3000;

const pathstatic=path.join(__dirname,'../public');
const tempPath=path.join(__dirname,'../templates');
const partialsPath=path.join(__dirname,'../templates/partials');

app.use(express.static(pathstatic));
handlebars.registerPartials(partialsPath);
app.set('view engine', 'hbs');
app.set("views",tempPath);


app.get('/',(req, res)=>{
    res.render('views/home');
    
});

app.get('/about',(req, res)=>{
    res.render('views/about');
    
});
app.get('/weather',(req, res)=>{
    res.render('views/weather');
    
});
app.get('*',(req, res)=>{
    res.render('views/404');
    
});

app.listen(port,()=>{
    console.log(`Port number ${port} is running`)
});