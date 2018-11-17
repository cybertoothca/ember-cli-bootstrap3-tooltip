import TwbsSpan from './twbs-span';

export default TwbsSpan.extend({
  classNames: ['twbs-i'],
  /**
   * This is a `i` tag.
   */
  tagName: 'i',
  twbsSpan: false // turns of the style class `twbs-span` inherited from the `twbs-span` component.
});
