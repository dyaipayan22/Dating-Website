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
    first_name:String,
    last_name:String,
    gender:String,
    pref_gender:String,
    description:String,
    dob: Date,
    pictures: String,
    song: String
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
           
            // if(result === true)
            // {
                
            //     res.send("success")
            // }
            if(result === false){
                console.log("wrong pass")
                return res.status(500).send("fail")
            }
            else if(err)
            {
                console.log(err);
                
            }
        })
        const token = jwt.sign(user_obj.toJSON(), user_obj.email,{
            expiresIn: 60*24,
           })
       
        return res.status(201).json({ token,userId:user_obj.user_id, email})
            
})
//getting one user from the DB ?

app.get('/users', async (req,res)=>
{
    const userId = req.query.userId


    try
    {
        const user_obj = await user.findOne({user_id:userId})
        res.send(user_obj)
        console.log("test from /users")
    }
    catch(err)
    {
        console.log(err)
    }
})

app.get('/filter-users', async (req,res)=>
{
    const gender = req.query.gender
    console.log("test from /filter-users")

    try
    {
        const query ={gender:{ $eq : gender }}
        const user_obj = await user.find(query)
        console.log("filtered users",user_obj)
        res.send(user_obj)
    }
    catch(err)
    {
        console.log(err)
    }
})

app.put('/users', async (req,res)=>
{
    const formData = req.body.formData

    try 
    {
        const query = {user_id:formData.user_id}
        const updateDocument = {
            $set:{
                first_name: formData.first_name,
                last_name: formData.last_name,
                gender: formData.gender,
                dob: formData.dob,
                pref_gender: formData.pref_gender,
                description: formData.description,
                pictures: formData.pictures,
                song: formData.song,
            }
        }
        const updatedUser = await user.updateOne(query, updateDocument)
        console.log("test from put /users")
        res.status(201).send(updatedUser)
    }
    catch(err)
    {
        console.log(err)
    }
   
})

//getting all the users in the db and resetting the user db
app.get('/delusers',async (req,res)=>{

    try{
        const returnedUsers = await user.findOne({email:"arijit@gmail.com"})
        console.log(returnedUsers)
        // const deleteUsers = await user.deleteMany({})
        // console.log(deleteUsers)
        console.log("test from delusers")
        res.send(returnedUsers)
    } 
    finally{
       //await client.close()
       console.log("complete")
    }
})



app.listen(port, ()=> console.log('Server running on port ' + port))
