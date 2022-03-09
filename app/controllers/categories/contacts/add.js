import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class CategoriesContactsAddController extends Controller {
  @service store;
  @service router;

  @action save(contact) {
    let c = this.store.createRecord('contact', contact);
    c.category = this.category;
    c.save().then(() => {
      this.router.transitionTo('categories.contacts', this.category);
    });
  }
}
