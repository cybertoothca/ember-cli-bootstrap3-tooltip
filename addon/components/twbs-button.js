import TwbsSpan from './twbs-span';

export default TwbsSpan.extend({
  attributeBindings: [
    'autofocus',
    'disabled',
    'form',
    'formaction',
    'formenctype',
    'formmethod',
    'formnovalidate',
    'formtarget',
    'name',
    'type',
    'value',
  ],
  classNames: ['btn', 'twbs-button'],
  /**
   * This is a `button` tag.
   */
  tagName: 'button',
  twbsSpan: false, // turns of the style class `twbs-span` inherited from the `twbs-span` component.
});
