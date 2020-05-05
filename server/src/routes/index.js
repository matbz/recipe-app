const MemberController = require('../controllers/MemberController');
const config = require('../config');

module.exports = (app) => {
  // Members
  app.get('/api/members',
    MemberController.index);

  app.post('/api/members',
    MemberController.create);

  app.post('/api/members/delete',
    MemberController.delete);

  app.put('/api/members',
    MemberController.update);

}
