const express = require('express');
const router = express.Router();



// all Controllers get hear
const { getAllDeves, createDeve, singleDeve, editDeve, deleteDeve } = require('../controllers/devecontroller');

// all Controllers end hear

// All Routes Function working start hear
router.route('/').get(getAllDeves).post(createDeve);
router.route('/:id').get(singleDeve).put(editDeve).patch(editDeve).delete(deleteDeve);


// All Routes Function working End hear

module.exports = router;