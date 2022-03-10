import Model, { attr, belongsTo } from '@ember-data/model';

export default class ContactModel extends Model {
  @attr('string') nom;
  @attr('string') prenom;
  @attr('string') email;
  @belongsTo('category', { async: true, autoSave: true }) category;
}
