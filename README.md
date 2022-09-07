# ember-cli-bootstrap3-tooltip

[![npm version](http://badge.fury.io/js/ember-cli-date-textbox.svg)](http://badge.fury.io/js/ember-cli-date-textbox) ![downloads](https://img.shields.io/npm/dy/ember-cli-date-textbox.svg) [![Code Climate](http://codeclimate.com/github/cybertoothca/ember-cli-date-textbox/badges/gpa.svg)](http://codeclimate.com/github/cybertoothca/ember-cli-date-textbox)

[![ember-observer-badge](http://emberobserver.com/badges/ember-cli-date-textbox.svg)](http://emberobserver.com/addons/ember-cli-date-textbox)

This addon allows you to quickly and conveniently create a [Bootstrap3 Tooltip](https://getbootstrap.com/docs/3.3/javascript/#tooltips).

## Compatibility

- Ember.js v2.18 or above
- Ember CLI v2.13 or above
- Node.js v8 or above

## Installation

The following will install this addon:

```
ember install ember-cli-bootstrap3-tooltip
```

### Dependencies

- You must have Bootstrap 3.x installed in your Ember application. Feel free to use the
  [ember-cli-bootstrap3-sass](http://emberobserver.com/addons/ember-cli-bootstrap3-sass)
  addon to setup Bootstrap if you haven't already done so.
- Tooltips require the _tooltip_ plugin to be included in your version of [Bootstrap](https://www.interviewbit.com/bootstrap-cheat-sheet).

## Demo

The demonstration web application can be found here:
[http://ember-cli-bootstrap3-tooltip.cybertooth.io/](http://ember-cli-bootstrap3-tooltip.cybertooth.io/).

## Usage

### What Does This Addon Do?

This addon supplied the following _components_:

- `twbs-abbr` - an `<abbr>` element whose title attribute is rendered
  as a Bootstrap tooltip.
- `twbs-button` - a `<button>` element whose title attribute is rendered
  as a Bootstrap tooltip. Accepts all standard HTML5 attributes.
- `twbs-cite` - a `<cite>` element whose title attribute is rendered
  as a Bootstrap tooltip.
- `twbs-i` - an `<i>` element whose title attribute is rendered
  as a Bootstrap tooltip.
- `twbs-span` - a `<span>` element whose title attribute is rendered
  as a Bootstrap tooltip. This is very convenient when you want to embed
  a tooltip into `<a>`nchor or `<button>` elements.
- `twbs-time` - a `<time>` element whose title attribute is rendered
  as a Bootstrap tooltip. Accepts the HTML5 `datetime` attribute.

...and the following _mixin_:

- `TwbsTooltip` - imported as
  `import TwbsTooltip as 'ember-cli-bootstrap3-tooltip/mixins/twbs-tooltip'` and
  can be added to new or existing components.

### Components

#### `{{twbs-abbr title="Some tooltip value"}}`

Create an `<abbr>` element whose `title` property will be used to
generate a tooltip.

##### Arguments

- _All of the properties listed in the `TwbsTooltip` mixin_.
- `title` - the tooltip String.
- `class` - any additional CSS classes (e.g. `initialism`)

##### Examples

[See the demonstration app for examples](http://ember-cli-bootstrap3-tooltip.cybertooth.io/)

#### `{{twbs-button class="btn-default title="Some tooltip value"}}`

Create a `<button>` element whose `title` property will be used to
generate a tooltip.

##### Arguments

- _All of the properties listed in the `TwbsTooltip` mixin_.
- _All HTML5 [button](https://www.w3schools.com/TAgs/tag_button.asp) attributes._
- `title` - the tooltip String.
- `class` - any additional CSS classes (e.g. `btn-default`)

##### Examples

[See the demonstration app for examples](http://ember-cli-bootstrap3-tooltip.cybertooth.io/)

#### `{{twbs-cite title="Some tooltip value"}}`

Create a `<cite>` element whose `title` property will be used to
generate a tooltip.

##### Arguments

- _All of the properties listed in the `TwbsTooltip` mixin_.
- `title` - the tooltip String.

##### Examples

[See the demonstration app for examples](http://ember-cli-bootstrap3-tooltip.cybertooth.io/)

#### `{{twbs-i title="Some tooltip value"}}`

Create an `<i>` element whose `title` property will be used to
generate a tooltip.

##### Arguments

- _All of the properties listed in the `TwbsTooltip` mixin_.
- `title` - the tooltip String.
- `class` - any additional CSS classes (e.g. `fa fa-clock`)

##### Examples

[See the demonstration app for examples](http://ember-cli-bootstrap3-tooltip.cybertooth.io/)

#### `{{twbs-span title="Some tooltip value"}}`

Create an `<span>` element whose `title` property will be used to
generate a tooltip.

##### Arguments

- _All of the properties listed in the `TwbsTooltip` mixin_.
- `title` - the tooltip String.

##### Examples

[See the demonstration app for examples](http://ember-cli-bootstrap3-tooltip.cybertooth.io/)

#### `{{twbs-time datetime="2001-09-11T04:00:00.000Z" title="Some tooltip value"}}`

Create an `<time>` element whose `title` property will be used to
generate a tooltip.

##### Arguments

- _All of the properties listed in the `TwbsTooltip` mixin_.
- _All HTML5 [time](https://www.w3schools.com/TAgs/tag_time.asp) attributes._
- `title` - the tooltip String.

##### Examples

[See the demonstration app for examples](http://ember-cli-bootstrap3-tooltip.cybertooth.io/)

#### `title` Component

When you have a tooltip title that is another rendered component or some sort of dynamic content, use
the nested title component on any one of the above `twbs-*` tags.

Here's an example from the [demo site](http://ember-cli-bootstrap3-tooltip.cybertooth.io/) of a clock
icon with the current time changing in the tooltip:

```hbs
{{#twbs-i class='glyphicon glyphicon-time' placement='right' as |i|}}
  {{#i.title}}{{clock.hour}}:{{clock.minute}}:{{clock.second}}{{/i.title}}
{{/twbs-i}}
```

### Mixins

#### `TwbsTooltip`

Check out the [Bootstrap Tooltip Options documentation](http://getbootstrap.com/javascript/#tooltips-options)
as all have been exposed in this mixin, with the following cavaets:

- The boolean options have been renamed to include
  a question mark; e.g. `animation` is `animation?` and `html` is
  `html?`.
- For conveneince, the `delay` option has been enhanced to accept two
  arguments: `delayHide` and `delayShow`.
- `title` is changed to `defaultTitle` because
  `title` is already used for the actual tooltip.
- `container` and `trigger` is also renamed to `tooltipContainer`
  and `tooltipTrigger` respectively to avoid a naming conflict with
  Ember.

##### Properties

- `animation` - Readonly alias to `animation?`.
- `animation?` - Apply a CSS fade transition to the tooltip (`boolean` defaults to `true`)
- `defaultTitle` - Default title value if title attribute isn't present. If a function is given, it will be called with its this reference set to the element that the tooltip is attached to. (`String` defaults to ''; or a function)
- `delayHide` - Delay hiding the tooltip (ms) - does not apply to manual trigger type (`number` defaults to 0)
- `delayShow` - Delay showing the tooltip (ms) - does not apply to manual trigger type (`number` defaults to 0)
- `html` - Readonly alias to `html?`.
- `html?` - Insert HTML into the tooltip. If false, jQuery's text method will be used to insert content into the DOM. Use text if you're worried about XSS attacks. (`boolean` defaults to `false`)
- `placement` - How to position the tooltip: `top` | `bottom` | `left` | `right` | `auto`. When `auto` is specified, it will dynamically reorient the tooltip. For example, if placement is `auto left`, the tooltip will display to the left when possible, otherwise it will display right. When a function is used to determine the placement, it is called with the tooltip DOM node as its first argument and the triggering element DOM node as its second. The this context is set to the tooltip instance. (`String` defaulting to `top`; or a function)
- `selector` - If a selector is provided, tooltip objects will be delegated to the specified targets. In practice, this is used to enable dynamic HTML content to have tooltips added. See [this](https://github.com/twbs/bootstrap/issues/4215) and an [informative example](http://jsbin.com/zopod/1/edit). (`String` defaults to `false`)
- `template` - Base HTML to use when creating the tooltip. The tooltip's title will be injected into the `.tooltip-inner`. `.tooltip-arrow` will become the tooltip's arrow. The outermost wrapper element should have the `.tooltip` class. (`String` defaults to `<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>`)
- `tooltipContainer` - Appends the tooltip to a specific element. Example: container: 'body'. This option is particularly useful in that it allows you to position the tooltip in the flow of the document near the triggering element - which will prevent the tooltip from floating away from the triggering element during a window resize. (`String` defaults to `false`)
- `tooltipTrigger` - How tooltip is triggered: `click` | `hover` | `focus` | `manual`. You may pass multiple triggers; separate them with a space. manual cannot be combined with any other trigger. (`String` defaults to `'hover focus'`)
- `viewport` - Keeps the tooltip within the bounds of this element. Example: viewport: '#viewport' or { "selector": "#viewport", "padding": 0 }. If a function is given, it is called with the triggering element DOM node as its only argument. The this context is set to the tooltip instance. (`String` or `Object` or function; defaulting to `{ selector: 'body', padding: 0 }`)

### Troubleshooting And Tips

1. If you have a title that is dynamic use the nested title component.
1. Make sure the Bootstrap3 CSS and the tooltip Javascript plugin is installed.

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).
