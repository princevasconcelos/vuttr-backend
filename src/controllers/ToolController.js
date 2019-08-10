const toolMock = require('../../mocks/tools');
const Tool = require('../models/Tool');

const ToolController = {
  getTools(req, res) {
    const {q, tag} = req.query;

    if (q) {
      return res
          .status(200)
          .json(
              toolMock.filter((t) =>
                t.title.toLowerCase().includes(q.toLowerCase())
              )
          );
    }

    if (tag) {
      return res
          .status(200)
          .json(
              toolMock.filter((tool) => tool.tags.find((t) => t.includes(tag)))
          );
    }

    return res.status(200).json(toolMock);
  },

  async createTool(req, res) {
    const {title, link, description, tags} = req.body;

    const tool = await Tool.create({
      title,
      link,
      description,
      tags,
    });

    return res.status(201).json(tool);
  },

  deleteTool(req, res) {
    return res.status(204).send();
  },
};

module.exports = ToolController;
