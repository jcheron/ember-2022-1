import Model, { attr, hasMany } from '@ember-data/model';

export default class CategoryModel extends Model {
  @attr('string') nom;
  @hasMany('contact', { async: true }) contacts;
}
