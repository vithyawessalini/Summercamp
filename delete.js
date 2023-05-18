http = require('http')
url = require('url')
qs = require('querystring')

let cmp="e";
let dem="c";
let name="g";
function onRequest(request,response)
{
    var path=url.parse(request.url).pathname;
    console.log("Request for "+path+" recieved");
    var query=url.parse(request.url).query;
    var cmpid=qs.parse(query)["cmpid"];
    cmp=cmpid;
    var email=qs.parse(query)["input1"];
    dem=email;
    var ps=qs.parse(query)["input2"];
    name=ps;
   // response.write("Hello "+name+" "+lname+"\n"+"Your email: "+email+"\n"+"Mobile number: "+phno+"\n"+"Gender: "+gend+"\n");
   
    
    Name.findOne({camperid:cmp,name:dem,password:name}).then(user1=>{
        if(user1){
            //errors=({msg: 'logged in successfully'});
            deletedata();
            response.write("Your registeration has been cancelled ");
            response.end();
        }
        else{
            //errors=({msg: 'user and password does not match'});
            response.write("You entered wrong details");
            response.end();
        }
        //console.log('register',{errors})
        
    })
}
http.createServer(onRequest).listen(6001);
console.log("Server is running now....");
const mongoose =require("mongoose")
const urla = "mongodb://localhost:27017/dbmslab";
const name1 = new mongoose.Schema({ camperid:Number,name: String, password:String });

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
const deletedata=async() => {

    await Name.deleteMany({camperid:cmp,name:dem,password:name});
    
    }