async function register(serviceData){
    const {userName,email,password} = serviceData;

    try {
        if(!userName || !email || !password) {
            return res.status(400).send("All fields are require")
        }
    
        const userExist = await User.findOne({email});
    
        if(userExist){
            return res.status(401).send("User already exist")
        }
        
        const hashedPassword = await bcrypt.hash(password,12)
    
        const user = User.create({
            userName,
            email,
            password:hashedPassword
        })
    
        if(!user){
            return res.status(400).send("user registration failed,please try again")
        }
       
        await user.save()
    
        res.status(200).json({
            message: "User Registration successfully"
        })
    } catch (error) {
        console.log(error);
    }
}