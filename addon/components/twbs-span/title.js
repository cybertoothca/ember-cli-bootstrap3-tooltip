import Component from '@ember/component';
import { isPresent } from '@ember/utils';
// noinspection JSFileReferences
import layout from '../../templates/components/twbs-span/title';

export default Component.extend({
  classNames: ['hidden', 'twbs-span-title'],
  layout,
  /**
   * Call the closure action passed to the `register` property.  Invoking this closure should set the title
   * section of the tooltip.
   */
  didInsertElement() {
    this._super(arguments);

    if (isPresent(this.get('register'))) {
      this.get('register')(this.get('element').querySelector('.twbs-tooltip-title'));
    } else {
      console.warn('The `twbs-span.title` component should have an action assigned to its `register` property.');
    }
  }
});
