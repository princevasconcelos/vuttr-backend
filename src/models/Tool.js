const {Schema, model} = require('mongoose');

const ToolSchema = new Schema(
    {
      title: {
        type: String,
        required: true,
      },
      link: {
        type: String,
      },
      description: {
        type: String,
      },
      tags: [String],
    },
    {versionKey: false}
);

module.exports = model('Tool', ToolSchema);
