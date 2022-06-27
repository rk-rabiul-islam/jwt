const Admin = require('../admin/models/adminModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


/**
 * Admin Auth Controller with email & password (to login method)
 * @param {*} req 
 * @param {*} res 
 */
const adminLogin = async (req , res) => {

    const {email, password } = req.body;
    const loginData = await Admin.findOne({email});

    if( !loginData){
        res.status(404).json({
            message : `Email not found! Check your email and try again`
        });
    }else{

        if( ( await bcrypt.compare(password, loginData.password)) ){

            let token = jwt.sign({ id : loginData._id, Username : loginData.username}, process.env.JWT_SECRET, {
                expiresIn : "2d"
            })

            res.status(200).json({
                id : loginData._id,
                name : loginData.name,
                username : loginData.username,
                email : loginData.email,
                token : token
            });

        }else{
            res.status(401).json({
                message : `wrong password try again later`
            });
        }
    }



}


/**
 * all auth exports.
 */
module.exports = {
    adminLogin
}