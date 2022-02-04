import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class Ex1Controller extends Controller {
  MAX = 100;
  @tracked content = 'Texte par défaut';
  @tracked info = '';

  get size() {
    return this.MAX - this.content.length;
  }

  get style() {
    let size = this.size;
    if (size < 20) {
      return 'danger';
    }
    if (size < 50) {
      return 'warning';
    }
    return 'info';
  }

  @action update() {
    this.info = 'updated';
  }
}
