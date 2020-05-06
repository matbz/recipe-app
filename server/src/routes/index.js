const CategoryController = require('../controllers/CategoryController');
const RecipeController = require('../controllers/RecipeController');
const StepController = require('../controllers/StepController');
const IngredientController = require('../controllers/IngredientController');
const IngredientGroupController = require('../controllers/IngredientGroupController');

const config = require('../config');

module.exports = (app) => {

  app.get('/api/categories',
    CategoryController.index);

  app.get('/api/categories/:categoryid/recipes',
    RecipeController.index);

  app.get('/api/recipes/:id',
    RecipeController.get);

  app.get('/api/recipes/:id/steps',
    StepController.index);

  app.get('/api/recipes/:id/ingredientgroups',
    IngredientGroupController.index);

  app.get('/api/ingredientgroups/:id/ingredients',
    IngredientController.index);
}
