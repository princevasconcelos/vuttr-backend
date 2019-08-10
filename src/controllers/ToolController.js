const Tool = require('../models/Tool');

const isProduction = process.env.NODE_ENV === 'production';

const ToolController = {
  async getTools(req, res) {
    const {q, tag} = req.query;

    try {
      const tools = await Tool.find();

      if (q) {
        return res
            .status(200)
            .json(
                tools.filter((tool) =>
                  tool.title.toLowerCase().includes(q.toLowerCase())
                )
            );
      }

      if (tag) {
        return res
            .status(200)
            .json(tools.filter((tool) => tool.tags.find((t) => t.includes(tag))));
      }

      return res.status(200).json(tools);
    } catch (err) {
      return res.status(500).json({
        error: isProduction
          ? 'Internal server error'
          : `Something went wrong. Try again later. ${err}`,
      });
    }
  },

  async createTool(req, res) {
    const {title, link, description, tags} = req.body;

    if (!title) {
      return res.status(400).json({
        error: isProduction ? 'Bad request' : 'Title is required',
      });
    }

    try {
      const tool = await Tool.create({
        title,
        link,
        description,
        tags,
      });

      return res.status(201).json(tool);
    } catch (err) {
      return res.status(400).json({
        error: isProduction
          ? 'Bad request'
          : `One or more fields are not correct. Check the documentation. ${err}`,
      });
    }
  },

  async deleteTool(req, res) {
    const {id} = req.params;

    if (!id) {
      return res.status(400).json({
        error: isProduction
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
          : `No tool with that id: ${id}. Check if the ID is correct. ${err}`,
      });
    }
  },
};

module.exports = ToolController;
