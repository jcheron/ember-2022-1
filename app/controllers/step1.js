import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action, set } from '@ember/object';

export default class Step1Controller extends Controller {
  dispoItems = [];
  @tracked dispoItems_ = [];
  includedItems = [];
  @tracked includedItems_ = [];
  sInit = [];

  @action
  changeDispo(elements) {
    set(this, 'dispoItems_', elements);
  }

  @action
  changeIncluded(elements) {
    set(this, 'includedItems_', elements);
  }

  @action add(source, dest, what) {
    dest.pushObjects(what);
    source.removeObjects(what);
  }

  @action remove(source, dest, what) {
    this.add(source, dest, what);
  }
}
