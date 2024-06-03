import AppError from "../utils/error.utils";

const isLoggedIn = async (req,res,next) => {
    const {token} = req.cookies;

    if(!token){
        return next(new AppError("Unauthenticated ,please login again",400))
    }

    const userDetails = await jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)

    req.user = userDetails;

    next()

}

export {
    isLoggedIn
}