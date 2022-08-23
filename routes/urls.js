const express = require('express');
const router = express.Router();
const urlController = require('../controllers/urls')

router.get('/', (req, res) => res.json({ message: 'Welcome' }));;
router.get("/urls", urlController.getAll);
router.post("/urls", urlController.addUrl);

module.exports = router;
