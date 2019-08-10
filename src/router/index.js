const router = require('express').Router();
const ToolController = require('../controllers/ToolController');

router.get('/tools', ToolController.getTools);
router.post('/tools', ToolController.createTool);
router.delete('/tools/:id', ToolController.deleteTool);

module.exports = router;
