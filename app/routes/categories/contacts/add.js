import Route from '@ember/routing/route';

export default class CategoriesContactsAddRoute extends Route {
  model(params) {
    console.log(params.category_id);
  }

  setupController(controller, model) {
    controller.set('category', model);
  }
}
