import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class CategoriesContactsRoute extends Route {
  @service store;

  model(params) {
    return this.store.findRecord('category', params.category_id, {
      include: 'contacts',
    });
  }
}
