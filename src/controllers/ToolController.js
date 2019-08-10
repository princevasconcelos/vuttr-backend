const toolMock = require('../../mocks/tools');

const ToolController = {
  getTools(req, res) {
    const {q, tag} = req.query;

    if (q) {
      return res
          .status(200)
          .send(
              toolMock.filter((t) =>
                t.title.toLowerCase().includes(q.toLowerCase())
              )
          );
    }

    if (tag) {
      return res
          .status(200)
          .send(
              toolMock.filter((tool) => tool.tags.find((t) => t.includes(tag)))
          );
    }

    return res.status(200).send(toolMock);
  },

  createTool(req, res) {
    return res.status(201).send('created');
  },

  deleteTool(req, res) {
    return res.status(204).send('deleted');
  },
};

module.exports = ToolController;
