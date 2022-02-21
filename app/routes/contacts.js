import Route from '@ember/routing/route';
import Contacts from '../classes/contacts';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class ContactsRoute extends Route {
  @service store;

  model() {
    return new Contacts(this.store.findAll('contact'));
  }

  @action add(name) {
    let c = this.store.createRecord('contact', {
      nom: name,
    });
    c.save();
  }

  @action delete(contact) {
    contact.deleteRecord();
  }

  @action cancelDeletion(contacts) {
    contacts.forEach((c) => {
      //Annulation de toutes les modifs dont la supp
      c.rollbackAttributes();
    });
  }

  @action confirmDeletion(contacts) {
    contacts.forEach((c) => {
      c.save();
    });
  }
}
