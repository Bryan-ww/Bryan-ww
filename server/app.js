const express = require('express');
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.all('*',(req,res,next)=> {
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Methods','GET,POST,PUT,DELETE');
  res.header(('Content-Type','application/json;charset=utf8'))
  res.header('Access-Control-Allow-Headers',"Origin,X-Requested-With,Content-Type,Accept");
  next()
})
app.post('/compile',(req,res)=>{
 const {fileName,fileJson} = req.body
 try {
   compile(fileName,fileJson)
 } catch (error) {
   res.json({code:0,msg:error})
 }

})
const port = 3000

app.listen(port, () => {
  console.log('0000服务与启动')
})
