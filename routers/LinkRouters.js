const express = require('express');
const router = express.Router();
const linkController = require('../controllers/linkController')

router.get ('/', linkController.allLinks);
router.get ('/:title', linkController.redirect);
router.get('/add', (req, res) => res.render('add', { err: false, body: {} }));

module.exports = router