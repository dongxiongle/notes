const { mock, Random } = require('mockjs');

const mockApp = function(app) {
  app.get('/api/pullRefresh', function(rep, res) {
    const a = mock({
      'code': 200,
      'list|10': [{
        'id|1-100': 1,
        'title': mock('@ctitle(4, 10)')
      }]
    });
    res.json(a);
  });
}

module.exports = mockApp;
