import Ember from 'ember';

/**
 * The Tooltip mixin can be added to new or existing components to enable the Bootstrap tooltip.
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
   * Default title value if title attribute isn't present.
   *
   * If a function is given, it will be called with its this reference set to the element that the tooltip is
   * attached to.
   */
  defaultTitle: '',
  /**
   * Delay showing and hiding the tooltip (ms) - does not apply to manual trigger type.
   *
   * If a number is supplied, delay is applied to both hide/show.
   *
   * Object structure is: `delay: { "show": 500, "hide": 100 }`.
   */
  delay: 0,
  /**
   * Delay hiding the tooltip (ms) - does not apply to manual trigger type.
   */
  delayHide: undefined,
  /**
   * Delay showing the tooltip (ms) - does not apply to manual trigger type.
   */
  delayShow: undefined,
  /**
   * Insert HTML into the tooltip. If false, jQuery's text method will be used to insert content into
   * the DOM. Use text if you're worried about XSS attacks.
   */
  html: Ember.computed.alias('html?'),
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
   * If a selector is provided, tooltip objects will be delegated to the specified targets. In practice,
   * this is used to enable dynamic HTML content to have tooltips added. See
   * this (https://github.com/twbs/bootstrap/issues/4215) and an
   * informative example (http://jsbin.com/zopod/1/edit).
   */
  selector: false,
  /**
   * Base HTML to use when creating the tooltip.
   *
   * The tooltip's title will be injected into the .tooltip-inner.
   *
   * .tooltip-arrow will become the tooltip's arrow.
   *
   * The outermost wrapper element should have the .tooltip class.
   */
  template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
  /**
   * Appends the tooltip to a specific element. Example: container: 'body'. This option is particularly
   * useful in that it allows you to position the tooltip in the flow of the document near the
   * triggering element - which will prevent the tooltip from floating away from the triggering element
   * during a window resize.
   */
  tooltipContainer: false,
  /**
   * How tooltip is triggered - click | hover | focus | manual. You may pass multiple triggers; separate them
   * with a space. manual cannot be combined with any other trigger.
   */
  tooltipTrigger: 'hover focus',
  /**
   * Keeps the tooltip within the bounds of this element. Example: viewport: '#viewport'
   * or { "selector": "#viewport", "padding": 0 }
   *
   * If a function is given, it is called with the triggering element DOM node as its only argument. The
   * this context is set to the tooltip instance.
   */
  viewport: {selector: 'body', padding: 0},
  /**
   * Return a hash of all the options that can easily be passed into the popover initialization.
   * @returns {*|Object}
   */
  getOptions() {
    const hash =
      this.getProperties('animation', 'content', 'html', 'placement', 'selector', 'title');
    hash.container = this.get('popoverContainer');
    hash.delay = this.get('_delayComputed');
    hash.template = this.get('popoverTemplate');
    hash.trigger = this.get('popoverTrigger');
    return hash;
  },
  /**
   * If a number is supplied, delay is applied to both hide/show.
   *
   * Object structure is: `delay: { "show": 500, "hide": 100 }`.
   * @private
   */
  _delayComputed: Ember.computed('delay', 'delayHide', 'delayShow', function () {
    const delayObject = {
      hide: this.get('delay'),
      show: this.get('delay')
    };

    if (Ember.isPresent(this.get('delayHide'))) {
      Ember.set(delayObject, 'hide', this.get('delayHide'));
    }

    if (Ember.isPresent(this.get('delayShow'))) {
      Ember.set(delayObject, 'show', this.get('delayShow'));
    }

    return delayObject;
  }),
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
    const options = this.getProperties(
      'animation', 'html', 'placement', 'selector', 'template', 'viewport');
    options.container = this.get('tooltipContainer');
    options.delay = {show: this.get('delayShow'), hide: this.get('delayHide')};
    options.trigger = this.get('tooltipTrigger');
    options.title = this.get('defaultTitle');
    this.$().tooltip(options);
  }))
});
