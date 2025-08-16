const express = require('express');
const router = express.Router();

const { handleGenerateNewShortURL, handleRedirect, handleGetAnalytics } = require('../Controllers/url');

router.post('/', handleGenerateNewShortURL);
router.get('/analytics/:shortId', handleGetAnalytics);
router.get('/:shortId', handleRedirect);


module.exports = router;