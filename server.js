const express = require('express');
const cors = require('cors')
const PORT = 3000

const app = express()

app.use(cors())


app.get('/',(req,res)=>{
    
    res.json({
        message : "This is a home page"
    })
})



app.get('/todo',(req,res)=>{
    
    res.json({
        message : "This is a todo page"
    })
})



app.get('/todos',(req,res)=>{
    
    res.json({
        message : "This is a todos page"
    })
})



app.listen(PORT,()=>console.log(`Server is running on PORT:${PORT}`))