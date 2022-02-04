import { helper } from '@ember/component/helper';

export default helper(function formatCurrency(params /*, named*/) {
  let [amount, symbol] = params;
  return `${amount} ${symbol}`;
});
