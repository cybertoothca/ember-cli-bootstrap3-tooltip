import Ember from 'ember';
import layout from '../templates/components/twbs-abbr';
import Tooltip from '../mixins/tooltip';

export default Ember.Component.extend(Tooltip, {
  classNames: ['twbs-abbr'],
  layout,
  /**
   * This is a `abbr` tag.
   */
  tagName: 'abbr'
});
