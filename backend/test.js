const {v4:uuidv4} = require('uuid')
const cors = require('cors')
const bcrypt = require('bcryptjs')
const express = require('express')
const jwt = require('jsonwebtoken')
const app = express()
// app.use(cors())
// app.use(express.json())
// const {MongoClient} = require('mongodb')
// const mongoose = require('mongoose')
// const uri = 'mongodb+srv://Arijit:hypnagogia12212221@cluster0.3xgumso.mongodb.net/app-data?retryWrites=true&w=majority'

// const port = 8000

// mongoose.connect(uri,{useNewUrlParser:true})

// const UserSchema = new mongoose.Schema({
//     name:String,
//     email:String,
//     password:String
// });

// const users = mongoose.model("users", UserSchema)


//Check function for the api
// app.get('/', (req,res)=>{
//     res.json('Hello bokachoda')
// })


// app.post('/signup', async (req,res)=>{
//     const client = new MongoClient(uri)
//     const{email,password} = req.body

//     const generateuserId = uuidv4()
//     const hashedpassword = await bcrypt.hash(password, 10)

//     try{
//         client.connect()
//         const database = client.db('app-data')
//         const users = database.collection('users')
        
//         const existingUser = await users.findOne({email:email})

//         if(existingUser){
//             return res.status(409).send('User already there re pagla')

//         }

//         const sanitizedEmail = email.toLowerCase()
//         const data ={
//             user_id: generateuserId,
//             email: sanitizedEmail,
//             hashed_password: hashedpassword
//         }
//        const insertedUser = await users.insertOne(data)

//        const token = jwt.sign(insertedUser, sanitizedEmail,{
//         expiresIn: 60*24,
//        })

//       return res.status(201).json({token, userId:generateuserId, email:sanitizedEmail})

//     }
//     catch(err)
//     {
//         console.log(err)
//     }
// })


//getting all the users in the db and resetting the user db
// app.get('/users',async (req,res)=>{
//     const client = new MongoClient(uri)

//     try{
//         await client.connect()
//         const database = client.db('app-data')
//         const users = database.collection('users')

//         const returnedUsers = await users.find().toArray()
//         //await users.deleteMany({email:"ab@gmail.com"})
//         res.send(returnedUsers)
//     } 
//     finally{
//        await client.close()
//     }
// })
// async function signup() {
//     try {
//       var pass = "example";
//       pass = await hashPassword(pass);
//     } catch (err) {
//       console.error(err);
//     }
//   }

async function hashs(){
    const hashedPass = await bcrypt.hash("example", 10);
    console.log(hashedPass) // prints the actual hashed pass - It's printed second

    return hashedPass; //returns [object Promise]
}
    
    
hashs();



// app.listen(port, ()=> console.log('Server running on port ' + port))
