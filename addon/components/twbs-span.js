import Ember from 'ember';
import layout from '../templates/components/twbs-span';
import Tooltip from '../mixins/tooltip';

export default Ember.Component.extend(Tooltip, {
  classNames: ['twbs-span'],
  layout,
  /**
   * This is a `span` tag.
   */
  tagName: 'span'
});
