const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const color = require('colors');
const connetMongoDB = require('./config/db');
const path = require('path');



/**
 * Multer
 */
const multer = require('multer');
const storage = multer.diskStorage({
    destination : (req, file , cb) => {
        cb(null, './media/users')
    },
    filename : (req, file, cb) => {
        let extName = path.extname(file.originalname);
        let fileName = DOMAIN_NAME + '_' + USER_NAME + '_' + Date.now() + extName;
        cb(null, fileName);
    }
});

const upload = multer({
    storage : storage 
});

app.post('/upload', upload.array('user_photo', 50), (req, res) => {

    res.send('Photo uploaded Successfull');

});

/**
 * // mongoDB connection init
 */
connetMongoDB();

/**
 * // Environment variables init
 */
const port = process.env.SERVER_PORT;
const SERVER_AUTHOR = process.env.SERVER_AUTHOR;
const USER_NAME = process.env.USER_NAME;
const DOMAIN_NAME = process.env.DOMAIN_NAME;

// Request body init
app.use(express.json());
app.use(express.urlencoded({extended : false}));

/**
 * // All api Routes working start hear
 */
app.use('/api/deves', require('./routes/deveRoutes'));
app.use('/api/admins', require('./admin/routes/adminRoutes'));
// All api Routes working End hear

// My Api app port listener
app.listen(port, () => console.log("MY Express server with JWT Is Running".bgYellow.black));


