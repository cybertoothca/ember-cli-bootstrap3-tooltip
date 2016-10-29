import Ember from 'ember';

/**
 * The Tooltip mixin can be added to new or existing components to enable the Bootstrap tooltip.
 * NOTICE: This does not currently handle dynamic-changing title/tooltip values.
 * @see http://getbootstrap.com/javascript/#tooltips-options
 */
export default Ember.Mixin.create({
  /**
   * Read-only access to the animation? flag.
   */
  animation: Ember.computed.readOnly('animation?'),
  /**
   * Apply a CSS fade transition?
   */
  'animation?': true,
  /**
   * Make sure the title can be passed in.
   */
  attributeBindings: ['title'],
  /**
   * In millis.
   */
  delay: 0,
  /**
   * Read-only access to the html? flag.
   */
  html: Ember.computed.readOnly('html?'),
  /**
   * Insert HTML into the tooltip.
   */
  'html?': false,
  /**
   * How to position the tooltip - top | bottom | left | right | auto.
   *
   * When "auto" is specified, it will dynamically reorient the tooltip. For example, if placement is
   * "auto left", the tooltip will display to the left when possible, otherwise it will display right.
   *
   * When a function is used to determine the placement, it is called with the tooltip DOM node as its
   * first argument and the triggering element DOM node as its second. The this context is set to the tooltip instance.
   */
  placement: 'top',
  /**
   * How tooltip is triggered - click | hover | focus | manual. You may pass multiple triggers; separate them
   * with a space. manual cannot be combined with any other trigger.
   */
  tooltipTrigger: 'hover focus',
  /**
   * Destroy the bootstrap tooltip when the component is being destroyed.
   * @private
   */
  _destroyBoostrapTooltip: Ember.on('willDestroyElement', Ember.observer('title', function () {
    if (Ember.isPresent(this.get('title'))) {
      this.$().tooltip('destroy');
    }
  })),
  /**
   * Initialize the bootstrap tooltip if the title attribute is present.
   * @private
   */
  _initializeBootstrapTooltip: Ember.on('didInsertElement', Ember.observer('title', function () {
    if (Ember.isPresent(this.get('title'))) {
      const options = this.getProperties('animation', 'delay', 'html', 'placement');
      options.trigger = this.get('tooltipTrigger');
      this.$().tooltip(options);
    } else {
      this.$().tooltip('destroy');
    }
  }))
});
