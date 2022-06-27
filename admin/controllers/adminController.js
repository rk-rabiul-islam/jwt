const Admin = require('../models/adminModel');
const bcrypt    = require('bcryptjs');
const asyncHandler = require('express-async-handler');



/**
 * // All Admins get hear
 * @param {*} req 
 * @param {*} res 
 */
const getAllAdmins = asyncHandler (async (req, res) => {

    let data = await Admin.find();
    if( data == ""){
        res.status(200).json({
            message : 'No Data Available Yet'
        })
    }else{
        res.status(200).json(data)
    }
});
// All Admins end hear

/**
 * // single Admins get hear
 * @param {*} req 
 * @param {*} res 
 */
const singleAdmin = asyncHandler (async (req, res) => {


    let data = await Admin.findById(req.params.id);
    res.status(200).json(data);
});
// single Admins end hear


/**
 * // create Admins working start hear
 * @param {*} req 
 * @param {*} res 
 */
const createAdmin = asyncHandler (async (req, res) => {
    const {name, email, phone, username, password} = req.body;

    let solt = await bcrypt.genSalt(10);
    let hashPass = await bcrypt.hash(password, solt);

    if( !name || !email || !phone || !username || !password){
        res.status(404).json({
            message : 'All field are required'
        });

    }else{

        await Admin.create({
            ...req.body,
            password : hashPass
        });
        res.status(202).json({
            message : 'Admin Data createt'
        });
    }


});
// create Admins working end hear


/**
 * // edite Admins get hear
 * @param {*} req 
 * @param {*} res 
 */
const editAdmin = asyncHandler (async (req, res) => {

    let id = req.params.id

   let data = await Admin.findByIdAndUpdate(id, req.body, {
        new : true
    });
    
    res.status(200).json({
        message : `${data.name} Data Update Successfull`
    });
});
// edite Admins end hear


/**
 * // Delete Admins data hear
 * @param {*} req 
 * @param {*} res 
 */
const deleteAdmin = asyncHandler (async (req, res) => {

    let data = await Admin.findByIdAndDelete(req.params.id);

    res.status(200).json({
        message : `${data.name} Data Deletet Successfull`
    });
});
// Delete Admins end hear

/**
 * // Delete Admins data hear
 * @param {*} req 
 * @param {*} res 
 */
const adminProfile = asyncHandler (async (req, res) => {

    try{
        const {name, username, email, phone, skill, id} = req.user;

        res.status(200).json({
            id        : id,
            name        : name,
            username    : username,
            Email       : email,
            phone       : phone,
            skill       : skill
        })

    } catch(error){
        res.json({
            message  : `You cannot go to this page! Please log in first`
        })
    }

});
// Delete Admins end hear
/**
 * // Delete Admins data hear
 * @param {*} req 
 * @param {*} res 
 */
const adminHome = asyncHandler (async (req, res) => {

    try{
        const {name, username, email, phone, skill, id} = req.user;

        res.status(200).json({
            id        : id,
            name        : name,
            username    : username,
            Email       : email,
            phone       : phone,
            skill       : skill
        })

    } catch(error){
        res.json({
            message  : `You cannot go to this page! Please log in first`
        })
    }
});
// Delete Admins end hear


/**
 * module Exports here
 */
module.exports = {
    getAllAdmins,
    singleAdmin,
    createAdmin,
    editAdmin,
    deleteAdmin,
    adminProfile,
    adminHome
}