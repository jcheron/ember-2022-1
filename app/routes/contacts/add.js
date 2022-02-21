import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class ContactsAddRoute extends Route {
  @service store;

  model() {
    return {};
  }

  @action save(contact) {
    let c = this.store.createRecord('contact', contact);
    c.save().then(() => {
      this.transitionTo('contacts');
    });
  }
}
