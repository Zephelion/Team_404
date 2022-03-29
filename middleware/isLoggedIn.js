let session


const loggedUser = (req,res) => {
    // session = req.session;

    console.log(req);

    // if(session){
    //     next();
    // }else{
    //     redirect('/')
    // }
}

module.exports = {
    loggeduser:loggedUser,
}