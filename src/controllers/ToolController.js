const Tool = require('../models/Tool');

const isProduction = process.env.NODE_ENV === 'production';

const ToolController = {
  async getTools(req, res) {
    const {q, tag} = req.query;
    const tools = await Tool.find();

    if (q) {
      return res
          .status(200)
          .json(
              tools.filter((t) => t.title.toLowerCase().includes(q.toLowerCase()))
          );
    }

    if (tag) {
      return res
          .status(200)
          .json(tools.filter((tool) => tool.tags.find((t) => t.includes(tag))));
    }

    return res.status(200).json(tools);
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

  async deleteTool(req, res) {
    const {id} = req.params;

    if (!id) {
      return res.status(400).json({
        message: isProduction
          ? 'Bad request'
          : 'Provide an ID with the URL /tools/:id',
      });
    }

    try {
      await Tool.findByIdAndDelete(id);

      return res.status(204).json();
    } catch (err) {
      return res.status(404).json({
        error: isProduction
          ? 'Not found'
          : `No tool with that id: ${id}. Check if the ID is correct.`,
      });
    }
  },
};

module.exports = ToolController;
