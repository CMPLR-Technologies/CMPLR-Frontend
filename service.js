const express=require('express');
const bodyparser=require('body-parser');
const morgan=require('morgan');
const multiparty=require('connect-multiparty');

const MultipartyMiddleware=multiparty({uploadDir:'./images'});


const PORT=8000;
const app=express();
app.use('./images',express.static('images'));
app.use(bodyparser.urlencoded({extended:true}));

app.use(bodyparser.json());

app.get('/',(req,res)=>{
    res.status(200).json({
        message:"Successfully"
    });
});

app.post('/upload',MultipartyMiddleware,(req,res)=>{
    console.log(req.files.upload);
});

app.listen(PORT,console.log("connected to server localhost 4444"));