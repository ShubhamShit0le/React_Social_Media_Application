const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
// Register
router.post("/register", async (req, res) => {
    console.log("Register endpoint hit"); // Log to confirm the route is hit
    try {
        //encrypt password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword  =  await bcrypt.hash(req.body.password,salt);

        //create new user
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });
        //save user
        await user.save();
        res.status(200).send("Register Successfully");
    } catch (err) {
        res.status(500).json(err);
    }
});

    //Login
    router.post("/login", async (req, res) => {
        try {
            // Find user by email
            const user = await User.findOne({ email: req.body.email });
              !user && res.status(404).json("User not found");
            
            //validate password
           const validPassword = await bcrypt.compare(req.body.password,user.password) ;
            !validPassword && res.status(400).json("Wrong password");

          res.status(200).json(user);
        }catch(err){
            console.log(err);
        }
 
    });



module.exports = router;
