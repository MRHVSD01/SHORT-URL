const {getUser} = require('../Services/auth');

async function restricToLoginUserOnly(req, res, next){
    const userUid = req.cookies?.uid; // ? is use if cookie is avail. then it will use otherwise not
    if(!userUid){
        return res.redirect('/login');
    }

    const user = await getUser(userUid);
    if(!user){
        console.log('User Not Found');
        return res.redirect('/login');
    }else{
        req.user = user;
        next();
    }
} 
module.exports = { restricToLoginUserOnly };