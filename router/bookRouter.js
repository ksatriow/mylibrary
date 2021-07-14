const router = require('express').Router()
const bookController = require('../controller/bookController')

router.get('/', bookController.index);
router.post('/create', bookController.create);
router.get('/:id', bookController.show);
router.patch('/update/:id', bookController.update);
router.delete('/delete/:id', bookController.delete);

module.exports = router