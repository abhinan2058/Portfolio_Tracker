const express = require('express')
const app = express()
const bcrypt = require('bcryptjs')
const port=3000

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const {users} =require("./model/index.js")


app.get('/',(req,res)=>{
    res.render('login.ejs')
})

app.get('/cancel',(req,res)=>{
    res.redirect('/')
})

app.get('/register',(req,res)=>{
    res.render('register.ejs')
})

app.post('/register',async (req,res)=>{
    const fullname= req.body.fullname
    const username= req.body.username
    const password= req.body.password
    const confirmPassword= req.body.confirm
    const email= req.body.email
    const number= req.body.number

    if(password !== confirmPassword){
        return res.send("Password doesnot match")   
    }
    else if( !fullname || !username || !password || !confirmPassword || !email )
    {
        return res.send(" Please enter mandatory * fields !")
    }
    
   const data= await users.findAll({
        where:{
            email:email
        }
    })

    if(data.length >0){
        res.send("User already Registerd!")  
    }
    else{
    await users.create({
        fullname:fullname,
        username:username,
        password:bcrypt.hashSync(password,8),
        confirmPassword: bcrypt.hashSync(confirmPassword,8),
        email:email,
        number:number
    })
}
    res.redirect('/')
    // res.send("registered success")
    // console.log(req.body)

    
})


app.post('/login',async(req,res)=>{
    const username= req.body.username
    const password=req.body.password

    const user = await users.findAll({
        where:{
            username:username
        }
    })

    if(user.length >0){
       const check= bcrypt.compareSync(password,user[0].password)
       if(check)
       {
        res.render('home.ejs')
       }
       else{
        res.send('Invalid Login Credentials')
       }
    }
})




app.listen(port,()=>{
    console.log("App has started Successfully on port 3000")
})