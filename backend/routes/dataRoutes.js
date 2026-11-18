const express = require('express');
const router = express.Router();
const { getProjects, getSkills, getExperience } = require('../controllers/dataController');

router.get('/projects', getProjects);
router.get('/skills', getSkills);
router.get('/experience', getExperience);

module.exports = router;
