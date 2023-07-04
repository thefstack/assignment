let express =require('express');
let app=express();
let port = process.env.Port || 8000;

const path=require("path");
const hbs=require('hbs');





const viewPath=path.join(__dirname,"/templates/views");
const partialPath=path.join(__dirname,"/templates/partials");
const publicPath=path.join(__dirname,"/public");


app.set('view engine', 'hbs');
app.set('views',viewPath);
hbs.registerPartials(partialPath);

app.use(express.static('public'));


app.get("/",(req,res)=>{
    res.render('index');
});
app.get("/login",(req,res)=>{
    res.render('login');
})
app.get("/signup",(req,res)=>{
    res.render('signup');
})
app.get("/recruitment",(req,res)=>{
    res.render('recruitment');
})
app.get("/*",(req,res)=>{
    res.render('error404');
})

app.listen(port,()=>{
    console.log(`listening to port ${port}`);
})