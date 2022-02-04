import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { action, set } from '@ember/object';

export default class Ex2Route extends Route {
  @service productServices;

  model() {
    return this.productServices;
  }

  @action toggleActive(service) {
    set(service, 'active', !service.active);
  }
}
