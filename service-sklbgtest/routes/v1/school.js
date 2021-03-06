const express = require('express');
const controller = require('../../controller/school');
const router = express.Router();

router.route('/').post(controller.RegisterNewSchool); // register
router.route('/').get(controller.GetSchools); // fetch all schools
router.route('/search').post(controller.SearchSchools); // search schools

module.exports = router;
