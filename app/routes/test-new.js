import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class TestNewRoute extends Route {
  @service store;

  model() {
    return this.store.findAll('contact');
  }

  @action add(name) {
    let c = this.store.createRecord('contact', {
      nom: name,
    });
    c.save();
  }
}
