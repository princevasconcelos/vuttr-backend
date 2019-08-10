const db = require('../src/config/mongo');
const Tool = require('../src/models/Tool');
const mocks = require('../mocks/tools');

describe('Tools', () => {
  before((done) => {
    db.connection.once('open', () => {
      done();
    });
  });

  beforeEach(async () => {
    await Tool.insertMany(mocks);
  });

  afterEach(async () => {
    await Tool.deleteMany();
  });

  it('GET /tools should list all', () => {
    return request.get('/tools').then((response) => {
      assert.equal(response.status, 200);
      assert.ok(response.body.length === 3);
    });
  });

  it('POST /tools should create a new tool', () => {
    const testTool = {
      title: 'New Super Tool',
      link: 'http:supertool.com',
      description: 'Super fast tool',
      tags: ['test', 'testing'],
    };

    return request
        .post('/tools')
        .send(testTool)
        .then((response) => {
          assert.equal(response.status, 201);
          assert.ok(response.body);
          assert.ok(response.body.title === 'New Super Tool');
        });
  });

  it('DELETE /tools/:id should delete a tool', async () => {
    const tool = await Tool.findOne();

    return request.delete(`/tools/${tool._id}`).then((response) => {
      assert.equal(response.status, 204);
    });
  });
});
