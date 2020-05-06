const CategoryController = require('../controllers/CategoryController');
const RecipeController = require('../controllers/RecipeController');
const config = require('../config');

module.exports = (app) => {

  app.get('/api/categories',
    CategoryController.index);

  app.get('/api/categories/:categoryid/recipes',
    RecipeController.index);

    app.get('/api/recipes/:id',
    RecipeController.get);

}
