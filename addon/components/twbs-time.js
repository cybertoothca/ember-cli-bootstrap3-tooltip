import TwbsSpan from './twbs-span';

export default TwbsSpan.extend({
  attributeBindings: ['datetime'],
  classNames: ['twbs-time'],
  /**
   * This is a `time` tag.
   */
  tagName: 'time',
  twbsSpan: false // turns of the style class `twbs-span` inherited from the `twbs-span` component.
});
