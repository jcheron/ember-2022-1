import Route from '@ember/routing/route';

export default class MultiRoute extends Route {
  model() {
    return {
      elms: [
        { id: 1, title: 'A' },
        { id: 2, title: 'B' },
      ],
      selected: [],
    };
  }
}
