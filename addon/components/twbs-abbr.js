import TwbsSpan from './twbs-span';

export default TwbsSpan.extend({
  classNames: ['twbs-abbr'],
  /**
   * This is a `abbr` tag.
   */
  tagName: 'abbr',
  twbsSpan: false, // turns of the style class `twbs-span` inherited from the `twbs-span` component.
});
