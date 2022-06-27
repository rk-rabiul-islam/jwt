const jwt = require('jsonwebtoken');
const Admin = require('../admin/models/adminModel');



const authchack = async (req, res, next) => {

    if(req.headers.authorization){

        try{
            const token = req.headers.authorization.split(' ')[1];
            const token_verify = jwt.verify(token, process.env.JWT_SECRET);

            const { id , username} = token_verify;

            req.user = await Admin.findById(id);
            
            next();

        }catch(error){
            console.log(`${error}.bgred`);
            next();
        }

    }else{
        res.status(404).json({
            message  : 'Token not found'
        });
        next();
    }
    

}


module.exports = {
    authchack
}