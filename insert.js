http = require('http')
url = require('url')
qs = require('querystring') 

let user="a";
let ps="b";
let cmp="c";
let ses="e";
let ph="f";
let email="g";
let ag="h";
function onRequest(request,response)
{
    var path=url.parse(request.url).pathname;
    console.log("Request for "+path+" recieved");
    var query=url.parse(request.url).query;
    var fname=qs.parse(query)["fname"];
    user=fname;
    var pass=qs.parse(query)["pass"];
    ps=pass;
    var cmpid=qs.parse(query)["cmpid"];
    cmp=cmpid;
    var session=qs.parse(query)["daycamp"];
    ses=session;
    var em=qs.parse(query)["email"];
    email=em;
    var phno=qs.parse(query)["pn"];
    ph=phno;
    var age=qs.parse(query)["age"];
    ag=age;
    response.write("Hello "+user+", you has been registered successfully ");
    response.end();
   
    insertdata();
}
http.createServer(onRequest).listen(4022);
console.log("Server is running now....");


const mongoose =require("mongoose")
const urla = "mongodb://localhost:27017/dbmslab";
const name1 = new mongoose.Schema({ camperid:Number,name: String, password: String,camptype:String,Email:String,Phno:String,Age:String});
const Name= mongoose.model('summercamp',name1)

const db = async() =>{
    try{    
    console.log("entered")    
    const data=await mongoose.connect(urla,    
    {    
        useNewUrlParser: true,    
        useUnifiedTopology: true,    
        family: 4,    
    }
    )
    console.log("connected")
    }    
    catch(err){    
    console.log(err)    
    }    
}
db()
   

    const insertdata=async()=>{
       
        const cat = new Name({ camperid:cmp,name:user , password:ps,camptype:ses,Email:email,Phno:ph,Age:ag });        
        cat.save().then(() => console.log('Saved in db'));        
        }
