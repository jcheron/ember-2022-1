import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { action, set, copy } from '@ember/object';

export default class ContactsUpdateRoute extends Route {
  @service store;
  @service router;

  model(params) {
    return this.store.findRecord('contact', params.contact_id);
  }

  afterModel(model) {
    let copy = JSON.parse(JSON.stringify(model));
    set(model, 'copy', copy);
  }

  @action save(copy) {
    //Récupération model
    let contact = this.modelFor(this.routeName);
    //Copie des membres de copy vers contact
    Object.assign(contact, copy);
    contact.save().then(() => {
      this.router.transitionTo('contacts');
    });
  }

  setupController(controller) {
    controller.set('save', this.save);
  }
}
