# ember-cli-bootstrap3-tooltip [![GitHub version](http://badge.fury.io/gh/cybertoothca%2Fember-cli-bootstrap3-tooltip.svg)](http://badge.fury.io/gh/cybertoothca%2Fember-cli-bootstrap3-tooltip) ![](http://embadge.io/v1/badge.svg?start=2.3.0)

[![npm version](http://badge.fury.io/js/ember-cli-bootstrap3-tooltip.svg)](http://badge.fury.io/js/ember-cli-bootstrap3-tooltip) ![downloads](https://img.shields.io/npm/dy/ember-cli-bootstrap3-tooltip.svg) [![CircleCI](http://circleci.com/gh/cybertoothca/ember-cli-bootstrap3-tooltip.svg?style=shield)](http://circleci.com/gh/cybertoothca/ember-cli-bootstrap3-tooltip) [![Code Climate](http://codeclimate.com/github/cybertoothca/ember-cli-bootstrap3-tooltip/badges/gpa.svg)](http://codeclimate.com/github/cybertoothca/ember-cli-bootstrap3-tooltip) ![Dependencies](http://david-dm.org/cybertoothca/ember-cli-bootstrap3-tooltip.svg) [![ember observer](http://emberobserver.com/badges/ember-cli-bootstrap3-tooltip.svg)](http://emberobserver.com/addons/ember-cli-bootstrap3-tooltip) [![License](http://img.shields.io/npm/l/ember-cli-bootstrap3-tooltip.svg)](LICENSE.md)

This addon allows you to quickly and conveniently create a [Bootstrap3 Tooltip](https://getbootstrap.com/docs/3.3/javascript/#tooltips).

## Tested Against

[![ember-lts-2.4](https://img.shields.io/badge/ember--try-ember--lts--2.4-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-cli-bootstrap3-tooltip)
[![ember-lts-2.8](https://img.shields.io/badge/ember--try-ember--lts--2.8-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-cli-bootstrap3-tooltip)
[![ember-lts-2.12](https://img.shields.io/badge/ember--try-ember--lts--2.12-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-cli-bootstrap3-tooltip)

[![ember-release](https://img.shields.io/badge/ember--try-ember--release-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-cli-bootstrap3-tooltip)
[![ember-beta](https://img.shields.io/badge/ember--try-ember--beta-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-cli-bootstrap3-tooltip)
[![ember-canary](https://img.shields.io/badge/ember--try-ember--canary-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-cli-bootstrap3-tooltip)

## Demo

The demonstration web application can be found here:
[http://ember-cli-bootstrap3-tooltip.cybertooth.io/](http://ember-cli-bootstrap3-tooltip.cybertooth.io/). 

## What Does This Addon Do?

This addon supplied the following _components_:

* `twbs-abbr` - an `<abbr>` element whose title attribute is rendered
as a Bootstrap tooltip.
* `twbs-button` - a `<button>` element whose title attribute is rendered
as a Bootstrap tooltip.  Accepts all standard HTML5 attributes.
* `twbs-cite` - a `<cite>` element whose title attribute is rendered
as a Bootstrap tooltip.
* `twbs-i` - an `<i>` element whose title attribute is rendered
as a Bootstrap tooltip.
* `twbs-span` - a `<span>` element whose title attribute is rendered
as a Bootstrap tooltip.  This is very convenient when you want to embed
a tooltip into `<a>`nchor or `<button>` elements.
* `twbs-time` - a `<time>` element whose title attribute is rendered
as a Bootstrap tooltip.  Accepts the HTML5 `datetime` attribute.

...and the following _mixin_:

*  `TwbsTooltip` - imported as 
`import TwbsTooltip as 'ember-cli-bootstrap3-tooltip/mixins/twbs-tooltip'` and
can be added to new or existing components.

_Further information about these items can be found in the Usage 
section below._

## Requirements

* **Ember >= 2.3.0**: This addon uses the 
[hash helper](http://emberjs.com/blog/2016/01/15/ember-2-3-released.html#toc_hash-helper) which was 
introduced in Ember-2.3.0.
* Ember CLI
* You must have Bootstrap 3.x installed in your Ember application.  Feel free to use the
  [ember-cli-bootstrap3-sass](http://emberobserver.com/addons/ember-cli-bootstrap3-sass)
  addon to setup Bootstrap if you haven't already done so.
* Tooltips require the _tooltip_ plugin to be included in your version of Bootstrap.

## Installation

The following will install this addon:

```
ember install ember-cli-bootstrap3-tooltip
```

__As mentioned, you must install Bootstrap3's tooltip styles and script plugin.  See the requirements section above.__

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

* _All of the properties listed in the `TwbsTooltip` mixin_.
* `title` - the tooltip String.
* `class` - any additional CSS classes (e.g. `initialism`)

##### Examples

[See the demonstration app for examples](http://ember-cli-bootstrap3-tooltip.cybertooth.io/)

#### `{{twbs-button class="btn-default title="Some tooltip value"}}`

Create a `<button>` element whose `title` property will be used to 
generate a tooltip.

##### Arguments

* _All of the properties listed in the `TwbsTooltip` mixin_.
* _All HTML5 [button](https://www.w3schools.com/TAgs/tag_button.asp) attributes._
* `title` - the tooltip String.
* `class` - any additional CSS classes (e.g. `btn-default`)

##### Examples

[See the demonstration app for examples](http://ember-cli-bootstrap3-tooltip.cybertooth.io/)

#### `{{twbs-cite title="Some tooltip value"}}`

Create a `<cite>` element whose `title` property will be used to 
generate a tooltip.

##### Arguments

* _All of the properties listed in the `TwbsTooltip` mixin_.
* `title` - the tooltip String.

##### Examples

[See the demonstration app for examples](http://ember-cli-bootstrap3-tooltip.cybertooth.io/)

#### `{{twbs-i title="Some tooltip value"}}`

Create an `<i>` element whose `title` property will be used to 
generate a tooltip.

##### Arguments

* _All of the properties listed in the `TwbsTooltip` mixin_.
* `title` - the tooltip String.
* `class` - any additional CSS classes (e.g. `fa fa-clock`)

##### Examples

[See the demonstration app for examples](http://ember-cli-bootstrap3-tooltip.cybertooth.io/)

#### `{{twbs-span title="Some tooltip value"}}`

Create an `<span>` element whose `title` property will be used to 
generate a tooltip.

##### Arguments

* _All of the properties listed in the `TwbsTooltip` mixin_.
* `title` - the tooltip String.

##### Examples

[See the demonstration app for examples](http://ember-cli-bootstrap3-tooltip.cybertooth.io/)

#### `{{twbs-time datetime="2001-09-11T04:00:00.000Z" title="Some tooltip value"}}`

Create an `<time>` element whose `title` property will be used to 
generate a tooltip.

##### Arguments

* _All of the properties listed in the `TwbsTooltip` mixin_.
* _All HTML5 [time](https://www.w3schools.com/TAgs/tag_time.asp) attributes._
* `title` - the tooltip String.

##### Examples

[See the demonstration app for examples](http://ember-cli-bootstrap3-tooltip.cybertooth.io/)

#### `title` Component

When you have a tooltip title that is another rendered component or some sort of dynamic content, use 
the nested title component on any one of the above `twbs-*` tags.

Here's an example from the [demo site](http://ember-cli-bootstrap3-tooltip.cybertooth.io/) of a clock 
icon with the current time changing in the tooltip:

```js
{{#twbs-i class="glyphicon glyphicon-time" placement="right" as |i|}}
  {{#i.title}}{{clock.hour}}:{{clock.minute}}:{{clock.second}}{{/i.title}}
{{/twbs-i}}
```

### Mixins

#### `TwbsTooltip`

Check out the [Bootstrap Tooltip Options documentation](http://getbootstrap.com/javascript/#tooltips-options)
as all have been exposed in this mixin, with the following cavaets:

* The boolean options have been renamed to include
a question mark; e.g. `animation` is `animation?` and `html` is 
`html?`.
* For conveneince, the `delay` option has been enhanced to accept two
arguments: `delayHide` and `delayShow`.
* `title` is changed to `defaultTitle` because
`title` is already used for the actual tooltip.
* `container` and `trigger` is also renamed to `tooltipContainer` 
and `tooltipTrigger` respectively to avoid a naming conflict with 
Ember.

##### Properties

* `animation` - Readonly alias to `animation?`.
* `animation?` - Apply a CSS fade transition to the tooltip (`boolean` defaults to `true`)
* `defaultTitle` - Default title value if title attribute isn't present.  If a function is given, it will be called with its this reference set to the element that the tooltip is attached to.  (`String` defaults to ''; or a function)
* `delayHide` - Delay hiding the tooltip (ms) - does not apply to manual trigger type (`number` defaults to 0)
* `delayShow` - Delay showing the tooltip (ms) - does not apply to manual trigger type (`number` defaults to 0)
* `html` - Readonly alias to `html?`.
* `html?` - Insert HTML into the tooltip. If false, jQuery's text method will be used to insert content into the DOM. Use text if you're worried about XSS attacks. (`boolean` defaults to `false`)
* `placement` - How to position the tooltip: `top` | `bottom` | `left` | `right` | `auto`.  When `auto` is specified, it will dynamically reorient the tooltip. For example, if placement is `auto left`, the tooltip will display to the left when possible, otherwise it will display right.  When a function is used to determine the placement, it is called with the tooltip DOM node as its first argument and the triggering element DOM node as its second. The this context is set to the tooltip instance. (`String` defaulting to `top`; or a function)
* `selector` - If a selector is provided, tooltip objects will be delegated to the specified targets. In practice, this is used to enable dynamic HTML content to have tooltips added. See [this](https://github.com/twbs/bootstrap/issues/4215) and an [informative example](http://jsbin.com/zopod/1/edit). (`String` defaults to `false`)
* `template` - Base HTML to use when creating the tooltip. The tooltip's title will be injected into the `.tooltip-inner`. `.tooltip-arrow` will become the tooltip's arrow. The outermost wrapper element should have the `.tooltip` class. (`String` defaults to `<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>`)
* `tooltipContainer` - Appends the tooltip to a specific element. Example: container: 'body'. This option is particularly useful in that it allows you to position the tooltip in the flow of the document near the triggering element - which will prevent the tooltip from floating away from the triggering element during a window resize. (`String` defaults to `false`)
* `tooltipTrigger` - How tooltip is triggered: `click` | `hover` | `focus` | `manual`. You may pass multiple triggers; separate them with a space. manual cannot be combined with any other trigger. (`String` defaults to `'hover focus'`)
* `viewport` - Keeps the tooltip within the bounds of this element. Example: viewport: '#viewport' or { "selector": "#viewport", "padding": 0 }. If a function is given, it is called with the triggering element DOM node as its only argument. The this context is set to the tooltip instance. (`String` or `Object` or function; defaulting to `{ selector: 'body', padding: 0 }`)

### Troubleshooting And Tips

1. If you have a title that is dynamic use the nested title component.
1. Make sure the Bootstrap3 CSS and the tooltip Javascript plugin is installed.

---

# Ember Addon Building And Testing

## Setup

### Checkout

```
$ git clone git@github.com:cybertoothca/ember-cli-bootstrap3-tooltip.git
```

### With NPM

```
npm install
```

### With Yarn

```
yarn
```

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
1. Run an `npm prune` and `bower prune` from the root of your _other_ project's command line.

# Deploying The Dummy Application

Make sure your `~/.aws/credentials` file has a profile named _cybertooth_ 
with a valid key and secret,

```
[cybertooth]
aws_access_key_id = <KEY>
aws_secret_access_key = <SECRET>
```

Deploy by invoking the following command: `ember deploy production`

Confirm your changes are showing up in our S3 container: http://ember-cli-bootstrap3-tooltip.cybertooth.io/

# Releasing & Publishing To NPM

```
npm version x.y.z-sub.#
git push
git push --tags
npm publish
```
