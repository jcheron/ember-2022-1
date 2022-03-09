import Route from '@ember/routing/route';

export default class CategoriesContactsAddRoute extends Route {
  model(params) {
    console.log(params.category_id);
  }

  setupController(controller) {
    let model = this.modelFor('categories.contacts');
    controller.set('category', model);
  }
}
