const express = require('express');
const router = express.Router();
const { adminLogin } = require('../../auth/login');
const { authchack } = require('../../middleware/authMIddleware');

const { getAllAdmins, createAdmin, singleAdmin, editAdmin, deleteAdmin, adminProfile, adminHome } = require('../controllers/adminController');


/**
 * All router working start here
 */
// login admin routes (auth);
router.get('/profile', authchack, adminProfile);
router.get('/home', authchack, adminHome);

// Commone routers
router.get('/', getAllAdmins);
router.post('/', createAdmin);
router.get('/:id', singleAdmin);
router.put('/:id', editAdmin);
router.patch('/:id', editAdmin);
router.delete('/:id', deleteAdmin);

// admin login router
router.post('/login', adminLogin);

// All router working end here

/**
 * MOdule exports here
 */
module.exports = router;