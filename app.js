const express = require('express')
const path = require('path')
const app = express()
const port = 3000



app.set("view engine", "ejs");

app.set("view" , path.join(__dirname , "view"))

app.use(express.urlencoded({extended : true}));


const data = [

]
app.get('/' , (req , res)=>{
    return res.render('Home',{data});
})


app.post('/addData' , (req , res)=>{
    console.log(req.body);
    data.push(req.body)
    return res.redirect('/');
    
})

app.get('/deletData/:id' , (req, res)=>{
    const id = req.params.id;
    console.log(id);
    
    console.log(id)

    data.splice(id ,1)
    return res.redirect('/');
    
})
app.get('/editData/:id' , (req, res)=>{
    const id = req.params.id;

    let singleData = data[id];

    return res.render("edit" , {singleData,id})


})

app.post('/updateData/:id' , (req,res)=>{
    const id = req.params.id;
    console.log(req.body);

    data[id] = req.body;

    res.redirect('/')
    

})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))