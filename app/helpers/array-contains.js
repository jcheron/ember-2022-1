import { helper } from '@ember/component/helper';

export default helper(function arrayContains(params /*, hash*/) {
  const [items, value, prop] = params;
  let id = prop || 'id';
  return items.filterBy(id, value[id]).length > 0;
});
