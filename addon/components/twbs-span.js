import Ember from 'ember';
import layout from '../templates/components/twbs-span';
import TwbsTooltip from '../mixins/twbs-tooltip';

export default Ember.Component.extend(TwbsTooltip, {
  actions: {
    /**
     * Sets the `title` property to the supplied value and the `html?` property to `true`.
     * @param title the title for the span.  Will be rendered as html.
     */
    setElementTitle(title) {
      this.set('html?', true);
      this.set('defaultTitle', title);
    }
  },
  classNameBindings: ['twbsSpan'],
  layout,
  /**
   * This is a `span` tag.
   */
  tagName: 'span',
  twbsSpan: true
});
