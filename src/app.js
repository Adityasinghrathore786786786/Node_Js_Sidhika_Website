const express = require('express');
const path = require('path');
const hbs = require('hbs');
const bodyParser = require('body-parser')
const User =require('./models/usermsg')


require("./db/conn")

const { urlencoded } = require('express');

const app = express();
const port = process.env.PORT || 3000;

//setting path
const staticpath = path.join(__dirname, "../public")
const templatePath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")

//middlewares
app.use('/css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use('/js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use('/jq', express.static(path.join(__dirname, "../node_modules/jquery/dist")));
app.use(express.static(staticpath))
app.use(express.urlencoded({
    extended:false
}))
app.set("view engine" , "hbs")
app.set("views" , templatePath)
hbs.registerPartials(partialsPath)

//routing

app.get("/", (req, res)=>{
    res.render("index")
    console.log("This first")
})


app.post("/contact", async(req, res)=>{
  try {
    // res.send(req.body)
    const userData = new User(req.body);
    await userData.save()
    res.status(201).render("index")

    console.log(userData)
  } catch (error) {
    res.status(500).send(error);
  }

})

app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
})