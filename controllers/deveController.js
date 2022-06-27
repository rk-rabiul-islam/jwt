const Developer = require('../models/deveModel');
const asyncHandler = require('express-async-handler');



/**
 * // All Deves get hear
 * @param {*} req 
 * @param {*} res 
 */
const getAllDeves = asyncHandler (async (req, res) => {

    let data = await Developer.find();
    if( data == ""){
        res.status(200).json({
            message : 'No Data Available Yet'
        })
    }else{
        res.status(200).json(data)
    }
});
// All Deves end hear

/**
 * // single Deves get hear
 * @param {*} req 
 * @param {*} res 
 */
const singleDeve = asyncHandler (async (req, res) => {

    let data = await Developer.findById(req.params.id);
    res.status(200).json(data);
});
// single Deves end hear


/**
 * // create Deves working start hear
 * @param {*} req 
 * @param {*} res 
 */
const createDeve = asyncHandler (async (req, res) => {

    await Developer.create(req.body);
    res.status(202).json({
        message : 'Developer Data createt'
    });
});
// create Deves working end hear


/**
 * // edite Deves get hear
 * @param {*} req 
 * @param {*} res 
 */
const editDeve = asyncHandler (async (req, res) => {

    let id = req.params.id

   let data = await Developer.findByIdAndUpdate(id, req.body, {
        new : true
    });
    
    res.status(200).json({
        message : `${data.name} Data Update Successfull`

    });
});
// edite Deves end hear


/**
 * // Delete Deves data hear
 * @param {*} req 
 * @param {*} res 
 */
const deleteDeve = asyncHandler (async (req, res) => {

    let data = await Developer.findByIdAndDelete(req.params.id);

    res.status(200).json({
        message : `${data.name} Data Deletet Successfull`
    });
});
// Delete Deves end hear


/**
 * module Exports here
 */
module.exports = {
    getAllDeves,
    singleDeve,
    createDeve,
    editDeve,
    deleteDeve
}