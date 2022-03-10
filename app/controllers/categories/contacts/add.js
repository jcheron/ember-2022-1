import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class CategoriesContactsAddController extends Controller {
  @service store;
  @service router;

  contact = {};

  @action save(contact) {
    let c = this.store.createRecord('contact', contact);
    c.set('category', this.category);
    c.save().then(() => {
      this.router.transitionTo('categories.contacts', this.category);
    });
  }
}
