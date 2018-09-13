const express=require("express");
//const Mongodb=require("mongodb");//Mongodb.Client ,Mongodb.ObjectID
const {MongoClient, ObjectID}=require('mongodb');
const BodyParser=require('body-parser');
const assert=require('assert');
const app=express();
app.use(BodyParser.json())

/*const URL_Mongodb="mongodb://localhost:27017";
const DataBase="First-API"
MongoClient.connect(URL_Mongodb,{ useNewUrlParser: true },(err,Client)=>{
assert.equal(err,null,'data base connect failed')
const db=Client.db(DataBase);


})*/
var tab=[ {
name:"product",
avalabelQuaty:20

},
{name:"product1",
avalabelQuaty:10
},
{name:"product2",
avalabelQuaty:0
},
]
console.log("inital tab value",tab);
app.get('/Products',(req,res)=>{
res.send(tab);
})
app.get('/Products/:name',(req,res)=>{
let productname=req.params.name;
let productTofetch=tab.filter(e=>e.name===productname)
res.send(productTofetch)


})
app.delete("/producstdelete/:name",(req,res)=>{

    let producttodelets=req.params.name;
    tab=tab.filter(e=>e.name!== producttodelets)
    res.send(tab)
})
app.put("/modiferProduct",(req,res)=>{

    let modifer=req.body;
    tab=tab.map(e=>e.name===modifer.name ? e=modifer : e )
        res.send(tab) })
app.post('/addProducts',(req,res)=>{
let newProduct=req.body
tab.push(newProduct);
res.send(tab);
console.log("the new tab",tab)
    
})



 





app.listen( 3000,(err)=>{
    if(err)
    { console.log("server err");}
    else
    {console.log("server is runing on port 3000")}
})