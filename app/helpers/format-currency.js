import { helper } from '@ember/component/helper';

export default helper(function formatCurrency(params /*, named*/) {
  let [amount, locale] = params;
  locale = locale || 'fr-FR';
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'EUR',
  }).format(amount);
});
