const mongoose = require('mongoose');

const isTest = process.env.NODE_ENV === 'test';
const database = isTest ? 'tools-test' : 'tools';

mongoose.connect(
    `mongodb+srv://princevasconcelos:princevasconcelos@cluster0-t4dtv.mongodb.net/${database}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
    },
);

mongoose.connection
    .once('open', () => {
      console.log(`using database: ${database}`);
    })
    .on('error', (err) => {
      console.log('failed to connect to mongodb', err);
    });

module.exports = mongoose;
