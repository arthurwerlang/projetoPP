const { Router } = require('express');
const router = Router();
 
const { storedados } = require('../controller/dadoscontroller');
 
router.post('/store/dados', storedados);
 
module.exports = router;