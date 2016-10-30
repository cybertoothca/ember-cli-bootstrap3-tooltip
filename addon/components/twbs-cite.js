import Ember from 'ember';
import layout from '../templates/components/twbs-cite';
import Tooltip from '../mixins/tooltip';

export default Ember.Component.extend(Tooltip, {
  classNames: ['twbs-cite'],
  layout,
  /**
   * This is a `span` tag.
   */
  tagName: 'cite'
});
