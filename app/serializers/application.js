import DS from 'ember-data';
import Serializer from 'ember-local-storage/serializers/serializer';

export default Serializer.extend(DS.EmbeddedRecordsMixin, {
  isEmbeddedRecordsMixinCompatible: true,
  attrs: {
    contacts: { serialize: 'ids' },
  },
});
