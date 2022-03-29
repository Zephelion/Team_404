let session


const loggedUser = (req,res,next) => {
    session = req.body.email;

    console.log(session);

    if(session){
        next();
    }else{
        res.redirect('/')
    }
}

module.exports = {
    loggeduser:loggedUser,
}