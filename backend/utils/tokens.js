import jwt from 'jsonwebtoken';

const tokenGenerator = (userId, res)=>{
    const token = jwt.sign({id:userId},process.env.JWT_SECRET,{
        expiresIn:'3d'
    })   
    res.cookie('jwt',token,{
        httpOnly:true,
        maxAge:3*24*60*69*1000,
        sameSite:'strict',
        secure:process.env.NODE_ENV === 'production'
    })
    console.log(token);
    return token;
}

export default tokenGenerator;