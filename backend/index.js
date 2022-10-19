const {v4:uuidv4} = require('uuid')
const cors = require('cors')
const bcrypt = require('bcryptjs')
const express = require('express')
const jwt = require('jsonwebtoken')
const app = express()
app.use(cors())
app.use(express.json())
const {MongoClient} = require('mongodb')
const mongoose = require('mongoose')
const uri = 'mongodb+srv://Arijit:hypnagogia12212221@cluster0.3xgumso.mongodb.net/app-data?retryWrites=true&w=majority'

const port = 8000

mongoose.connect(uri,{useNewUrlParser:true}).then(()=>{console.log("connected to db")})

const UserSchema = new mongoose.Schema({
    user_id:String,
    email:String,
    password:String,
});

const user = mongoose.model("user", UserSchema)


app.post('/signup', async (req,res)=>{
   
    const{email,password} = req.body

    const generateuserId = uuidv4()
    const hashedpassword = await bcrypt.hash(password, 10)
    

    try{

        
        const existingUser = await user.findOne({email:email})

        if(existingUser){
            return res.status(409).send('User already there re pagla')

        }

        const sanitizedEmail = email.toLowerCase()
        const new_user = new user({
            user_id: generateuserId,
            email: sanitizedEmail,
            password: hashedpassword
        })
       const insertedUser = await new_user.save();
       console.log(insertedUser)
       console.log(insertedUser.toJSON())

        const token = jwt.sign(insertedUser.toJSON(), sanitizedEmail,{
         expiresIn: 60*24,
        })

      return res.status(201).json({ token,userId:generateuserId, email:sanitizedEmail})

    }
    catch(err)
    {
        console.log(err)
    }
})
//handling login
app.post('/login', async (req,res)=>{
    const{email,password} = req.body
    const user_obj = await user.findOne({email})
    if(user_obj === null)
    {
       return res.status(400).send("User not found please Register")
    }

           await bcrypt.compare(password,user_obj.password,function(err,result){
           
            if(result === true)
            {
                
                res.send("success")
            }
            else if(result === false){
                console.log("wrong pass")
                return res.status(500).send("fail")
            }
            if(err)
            {
                console.log(err);
                
            }
        })
           
            
        
 
})

//getting all the users in the db and resetting the user db
app.get('/users',async (req,res)=>{

    try{
        const returnedUsers = await user.findOne({email:"arijit@gmail.com"})
        console.log(returnedUsers)
        res.send(returnedUsers)
    } 
    finally{
       //await client.close()
       console.log("complete")
    }
})



app.listen(port, ()=> console.log('Server running on port ' + port))
