const router = require("express").Router();
const User = require("../modles/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

const {registervalidation}  = require("../validation")


router.post("/register",async (req,res)=>{
    console.log(req.body)
    
   const {error} = registervalidation(req.body);
   if(error) return res.status(400)
   //res.send(error.details[0].message)

   //check the user exists

   const emailexits = await User.findOne({email:req.body.email})
   if(emailexits) return res.status(400).send("email already exists");

   //hashing the password
   const salt = await bcrypt.genSalt(10);
   const hashPassword = await bcrypt.hash(req.body.password,salt);

   
   const user = new User({
        name:req.body.name,
        email:req.body.email,
        password:hashPassword
    })
    try{
       const saveuser = await user.save();
       res.send(saveuser)
    }catch(err){
        res.status(400).send(err)
    }

})
router.post("/login",async (req,res)=>{
    const {error} = loginvalidation(req.body);
   if(error) return res.status(400).send(error.details[0].message);

   const userexits = await User.findOne({email:req.body.email})
   console.log(userexits,"kavitha")
   if(!userexits) return res.status(400).send("Email or password is wrong");
   //password is correct
   const validpass = await bcrypt.compare(req.body.password,userexits.password);
   console.log(validpass)
   if(!validpass) return res.status(400).send("Invalid Password");

   const token = jwt.sign({
       _id:userexits.id},process.env.Token_secret
       
   )
   res.header('auth-token',token).send(token)

//    res.send("Logged in")



})

module.exports = router;
