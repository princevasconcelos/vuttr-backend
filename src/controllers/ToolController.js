const ToolController = {
  getTools(req, res) {
    return res.status(200).send('retrieve all');
  },

  createTool(req, res) {
    return res.status(201).send('created');
  },

  deleteTool(req, res) {
    return res.status(204).send('deleted');
  },
};

module.exports = ToolController;
