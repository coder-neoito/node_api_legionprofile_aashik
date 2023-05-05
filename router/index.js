const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profile');

//to get the headers
router.get('/getHeaders', profileController.getHeaders)

//to get the basic profile details
router.get('/getProfile', profileController.getProfile)

//to get the role & opening details for the player
router.get('/getroleOpening', profileController.getroleOpening)

//to get the player stats based on mode and season
router.get('/getStats', profileController.getStats)

module.exports = router;
