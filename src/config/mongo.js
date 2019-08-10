const mongoose = require('mongoose');

const db = process.env.NODE_ENV === 'test' ? 'tools-test' : 'tools';

mongoose.connect(
    `mongodb+srv://princevasconcelos:princevasconcelos@cluster0-t4dtv.mongodb.net/${db}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
    },
);

mongoose.connection
    .once('open', () => {
      console.log(`mongoose connected with db ${db}`);
    })
    .on('error', (err) => {
      console.log('failed to connect to mongodb', err);
    });

module.exports = mongoose;
