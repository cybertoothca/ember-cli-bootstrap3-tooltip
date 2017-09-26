import TwbsSpan from './twbs-span';

export default TwbsSpan.extend({
  classNames: ['twbs-cite'],
  /**
   * This is a `cite` tag.
   */
  tagName: 'cite',
  twbsSpan: false // turns of the style class `twbs-span` inherited from the `twbs-span` component.
});
