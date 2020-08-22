const  express  = require('express');
const  bodyParser  = require('body-parser');
const  config  = require('./config') 
const  mongoose  = require('mongoose')
const  dotenv  = require('dotenv');
const  cors  = require('cors'
const path = require('path');
const  contactRoute  = require('./route/messageRoute');
dotenv.config()
const URL = config.MONGODB_URL

mongoose.connect(URL,{ useNewUrlParser: true,useUnifiedTopology:true,useCreateIndex:true },(error)=>{
    if(!error){
        console.log(" connected to the database")
    }else{
        console.log("Error connecting")
    }
})

const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));


app.use('/api/message',contactRoute)




app.listen(5000,function(){
    console.log("server is running on port http://localhost:5000");
 });