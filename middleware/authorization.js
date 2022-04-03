let session


const loggedUser = (req,res,next) => {
    session = req.session;

    console.log(session);

    if(session.email){
        next();
    }else{
        res.redirect('/')
    }
}

const guest = (req,res,next) => {
    
    session = req.session;
    if(session.email){
        console.log('hier moet je zijn')
        res.redirect('/users');
    }else{
        next();
    }
}

module.exports = {
    loggeduser:loggedUser,
    guest: guest,
}