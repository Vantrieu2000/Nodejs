const express = require('express');
const NewsController = require('../app/controllers/NewsController');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

router.use('/:slug',newsController.show);
router.use('/',newsController.index);


module.exports = router;