import { helper } from '@ember/component/helper';

export default helper(function plural(params /*, named*/) {
  let [count, zero, one, other] = params;
  switch (count) {
    case 0:
      return zero;
    case 1:
      return one;
    default:
      return count + ' ' + other;
  }
});
