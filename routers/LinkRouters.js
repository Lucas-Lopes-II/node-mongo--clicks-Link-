const express = require('express');
const router = express.Router();
const linkController = require('../controllers/linkController')

router.get('/', (req, res) => res.send('Hello World'));

router.get ('/:title', linkController.redirect);

module.exports = router