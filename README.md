# ember-cli-bootstrap3-tooltip [![GitHub version](https://badge.fury.io/gh/cybertoothca%2Fember-cli-bootstrap3-tooltip.svg)](https://badge.fury.io/gh/cybertoothca%2Fember-cli-bootstrap3-tooltip)

[![npm version](https://badge.fury.io/js/ember-cli-bootstrap3-tooltip.svg)](https://badge.fury.io/js/ember-cli-bootstrap3-tooltip) [![CircleCI](https://circleci.com/gh/cybertoothca/ember-cli-bootstrap3-tooltip.svg?style=shield)](https://circleci.com/gh/cybertoothca/ember-cli-bootstrap3-tooltip) [![Code Climate](https://codeclimate.com/github/cybertoothca/ember-cli-bootstrap3-tooltip/badges/gpa.svg)](https://codeclimate.com/github/cybertoothca/ember-cli-bootstrap3-tooltip) ![Dependencies](https://david-dm.org/cybertoothca/ember-cli-bootstrap3-tooltip.svg) [![ember-observer-badge](http://emberobserver.com/badges/ember-cli-bootstrap3-tooltip.svg)](http://emberobserver.com/addons/ember-cli-bootstrap3-tooltip) [![License](https://img.shields.io/npm/l/ember-cli-bootstrap3-tooltip.svg)](LICENSE.md)

This addon provides several components that will generate [Bootstrap
Tooltips](http://getbootstrap.com/javascript/#tooltips) from the 
given element's title attribute.  Also provided is a mixin that
can be used to enable the Bootstrap Tooltip in your new or existing 
components.

__You must have Bootstrap 3.x installed in your Ember application.__  
Feel free to use the 
[ember-cli-bootstrap3-sass](https://emberobserver.com/addons/ember-cli-bootstrap3-sass) 
addon to setup Bootstrap if you haven't already done so.

## What Does This Addon Do?

This addon supplied the following _components_:

* `twbs-abbr` - an `<abbr>` element whose title attribute is rendered
as a Bootstrap tooltip.
* `twbs-cite` - a `<cite>` element whose title attribute is rendered
as a Bootstrap tooltip.
* `twbs-span` - a `<span>` element whose title attribute is rendered
as a Bootstrap tooltip.  This is very convenient when you want to embed
a tooltip into `<a>`nchor or `<button>` elements.

...and the following _mixins_:

*  `Tooltip` - imported as 
`import Tooltip as 'ember-cli-bootstrap3-tooltip/mixins/tooltip'` and
can be added to new or existing components.

_Further information about these items can be found in the Usage 
section below._

## Requirements

* Ember >= 1.13.0
* Ember CLI

## Installation

The following will install this addon:

    $ ember install ember-cli-bootstrap3-tooltip

__As mentioned you must install some version of Bootstrap3 in your
Ember application should you want this to work.__

### Upgrading

When working through the Ember upgrade process, I recommend
invoking the `ember install ember-cli-bootstrap3-tooltip` command once 
you are done to get the latest version of the addon.

## Usage

### Components

#### `{{twbs-abbr title="Some tooltip value"}}`

Create an `<abbr>` element whose `title` property will be used to 
generate a tooltip.

##### Arguments

* `title` - the tooltip String.
* `classNames` - any additional CSS classes (e.g. `initialism`)
* Also see the Tooltip mixin description below

##### Examples

    {{#twbs-abbr title="Best Friends, Forever"}}BFF{{/twbs-abbr}}
    {{#twbs-abbr annimation?=false title="Best Friends, Forever"}}BFF{{/twbs-abbr}}
    {{#twbs-abbr delay=500 title="Best Friends, Forever"}}BFF{{/twbs-abbr}}
    {{#twbs-abbr html?=true title="Best Friends, <strong>Forever</strong>"}}BFF{{/twbs-abbr}}
    {{#twbs-abbr placement="right" title="Best Friends, Forever"}}BFF{{/twbs-abbr}}

#### `{{twbs-cite title="Some tooltip value"}}`

Create a `<cite>` element whose `title` property will be used to 
generate a tooltip.

##### Arguments

* `title` - the tooltip String.
* `classNames` - any additional CSS classes.
* Also see the Tooltip mixin description below.

##### Examples

    <blockquote>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer>Someone famous in {{#twbs-cite title="Source Title"}}Source Title{{/twbs-cite}}</footer>
    </blockquote>

#### `{{twbs-span title="Some tooltip value"}}`

Create an `<span>` element whose `title` property will be used to 
generate a tooltip.

##### Arguments

* `title` - the tooltip String.
* `classNames` - any additional CSS classes.
* Also see the Tooltip mixin description below.

##### Examples

    {{#twbs-span title="Some sort of tooltip in a span"}}Hover Over This{{/twbs-span}}
    {{#twbs-span annimation?=false title="Some sort of tooltip in a span"}}Hover Over This{{/twbs-span}}
    {{#twbs-span delay=500 title="Some sort of tooltip in a span"}}Hover Over This{{/twbs-span}}
    {{#twbs-span html?=true title="Some sort of tooltip in a span"}}Hover Over This{{/twbs-span}}
    {{#twbs-span placement="right" title="Some sort of tooltip in a span"}}Hover Over This{{/twbs-span}}

### Mixins

#### `Tooltip`

Check out the [Bootstrap Tooltip Options documentation](http://getbootstrap.com/javascript/#tooltips-options)
as all have been exposed in this mixin, with the following cavaets:

* The boolean options have been renamed to include
a question mark; e.g. `animation` is `animation?` and `html` is 
`html?`.
* For simplicity sake, the `delay` option has been turned into two
arguments: `delayHide` and `delayShow`.
* `title` is changed to `defaultTitle` because
`title` is already used for the actual tooltip.
* `container` and `trigger` is also renamed to `tooltipContainer` 
and `tooltipTrigger` respectively to avoid a naming conflict with 
Ember.

##### Properties

* `animation` - Alias to `animation?`.
* `animation?` - Apply a CSS fade transition to the tooltip (`boolean` defaults to `true`)
* `defaultTitle` - Default title value if title attribute isn't present.  If a function is given, it will be called with its this reference set to the element that the tooltip is attached to.  (`String` defaults to ''; or a function)
* `delayHide` - Delay hiding the tooltip (ms) - does not apply to manual trigger type (`number` defaults to 0)
* `delayShow` - Delay showing the tooltip (ms) - does not apply to manual trigger type (`number` defaults to 0)
* `html` - Alias to `html?`.
* `html?` - Insert HTML into the tooltip. If false, jQuery's text method will be used to insert content into the DOM. Use text if you're worried about XSS attacks. (`boolean` defaults to `false`)
* `placement` - How to position the tooltip: `top` | `bottom` | `left` | `right` | `auto`.  When `auto` is specified, it will dynamically reorient the tooltip. For example, if placement is `auto left`, the tooltip will display to the left when possible, otherwise it will display right.  When a function is used to determine the placement, it is called with the tooltip DOM node as its first argument and the triggering element DOM node as its second. The this context is set to the tooltip instance. (`String` defaulting to `top`; or a function)
* `selector` - If a selector is provided, tooltip objects will be delegated to the specified targets. In practice, this is used to enable dynamic HTML content to have tooltips added. See [this](https://github.com/twbs/bootstrap/issues/4215) and an [informative example](http://jsbin.com/zopod/1/edit). (`String` defaults to `false`)
* `template` - Base HTML to use when creating the tooltip. The tooltip's title will be injected into the `.tooltip-inner`. `.tooltip-arrow` will become the tooltip's arrow. The outermost wrapper element should have the `.tooltip` class. (`String` defaults to `<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>`)
* `tooltipContainer` - Appends the tooltip to a specific element. Example: container: 'body'. This option is particularly useful in that it allows you to position the tooltip in the flow of the document near the triggering element - which will prevent the tooltip from floating away from the triggering element during a window resize. (`String` defaults to `false`)
* `tooltipTrigger` - How tooltip is triggered: `click` | `hover` | `focus` | `manual`. You may pass multiple triggers; separate them with a space. manual cannot be combined with any other trigger. (`String` defaults to `'hover focus'`)
* `viewport` - Keeps the tooltip within the bounds of this element. Example: viewport: '#viewport' or { "selector": "#viewport", "padding": 0 }. If a function is given, it is called with the triggering element DOM node as its only argument. The this context is set to the tooltip instance. (`String` or `Object` or function; defaulting to `{ selector: 'body', padding: 0 }`)

### Troubleshooting And Tips

1. If you have a title that is dynamic, maybe it includes the current 
time, you will want to bind a function to 
the mixin's `defaultTitle` property and __NOT__ specify a `title`
argument.

---

# Ember Addon Building And Testing

## Setup

* `git clone git@github.com:cybertoothca/ember-cli-bootstrap3-tooltip.git`
* `npm install`
* `bower install`

## Running The Dummy Application

* `ember server`
* Visit your app at http://localhost:4200.

## Running Addon Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building The Addon

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).

# Linking This Addon For Local Testing

## Linking

1. From the command line at the root of __this__ project run the 
`npm link` command to _link_ this addon within your local 
node repository.
1. From the _other_ Ember project that you wish to test this addon 
in, execute the following command:
`npm link ember-cli-bootstrap3-tooltip`.
1. Now in that same _other_ Ember project, you should go into the
`package.json` and add the ember addon with the version _*_.  It will
look something like this: `"ember-cli-bootstrap3-tooltip": "*"`.  Now
when/if you execute `npm install` on this _other_ project it 
will know to look for the linked addon rather than fetch it from
the central repository.

## Unlinking

1. Remove the addon from your local node repository with the following
command (that can be run anywhere):
`npm uninstall -g ember-cli-bootstrap3-tooltip`
1. Remove the reference to the `ember-cli-bootstrap3-tooltip` 
in your _other_ project's `package.json`.
1. Run an `npm prune` from the root of your _other_ project's command line.
