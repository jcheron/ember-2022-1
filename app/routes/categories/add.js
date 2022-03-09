import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class CategoriesAddRoute extends Route {
  @service router;
  @service store;

  model() {
    return {};
  }

  @action save(c) {
    let category = this.store.createRecord('category', c);
    category.save().then(() => {
      this.router.transitionTo('categories.contacts', category);
    });
  }
}
