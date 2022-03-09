import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class ContactsAddRoute extends Route {
  @service store;
  @service router;

  model() {
    return {};
  }

  @action save(c) {
    let category = this.modelFor('categories.contacts');
    let contact = this.store.createRecord('contact', c);
    contact.category = category;
    contact.save().then(() => {
      this.router.transitionTo('categories.contacts', category);
    });
  }
}
