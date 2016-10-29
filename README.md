# ember-cli-bootstrap3-tooltip [![GitHub version](https://badge.fury.io/gh/cybertoothca%2Fember-cli-bootstrap3-tooltip.svg)](https://badge.fury.io/gh/cybertoothca%2Fember-cli-bootstrap3-tooltip)

[![npm version](https://badge.fury.io/js/ember-cli-bootstrap3-tooltip.svg)](https://badge.fury.io/js/ember-cli-bootstrap3-tooltip) [![Build Status](https://travis-ci.org/cybertoothca/ember-cli-bootstrap3-tooltip.svg)](https://travis-ci.org/cybertoothca/ember-cli-bootstrap3-tooltip) [![Code Climate](https://codeclimate.com/github/cybertoothca/ember-cli-bootstrap3-tooltip/badges/gpa.svg)](https://codeclimate.com/github/cybertoothca/ember-cli-bootstrap3-tooltip) ![Dependencies](https://david-dm.org/cybertoothca/ember-cli-bootstrap3-tooltip.svg) [![ember-observer-badge](http://emberobserver.com/badges/ember-cli-bootstrap3-tooltip.svg)](http://emberobserver.com/addons/ember-cli-bootstrap3-tooltip) [![License](https://img.shields.io/npm/l/ember-cli-bootstrap3-tooltip.svg)](LICENSE.md)

This addon provides several components that will generate [Bootstrap
Tooltips](http://getbootstrap.com/javascript/#tooltips) from the 
given element's title attribute.  Also provided is a mixin that
can be used to enable the Bootstrap tooltip in your existing 
components.

__You must have Bootstrap 3.x installed in your Ember application.__  
Feel free to use the 
[ember-cli-bootstrap3-sass](https://emberobserver.com/addons/ember-cli-bootstrap3-sass) 
addon to setup Bootstrap.

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

## Installation

The following will install this addon:

    $ ember install ember-cli-bootstrap3-tooltip

__As mentioned you must install some version of Bootstrap3 in your
Ember application should you want this to work.__

## Usage

### Components


#### `{{twbs-abbr title="Some tooltip value"}}`

##### Arguments

##### Examples

#### `{{twbs-cite title="Some tooltip value"}}`

##### Arguments

##### Examples

#### `{{twbs-span title="Some tooltip value"}}`

##### Arguments

##### Examples

### Mixins

#### `Tooltip`

##### Properties


### Troubleshooting And Tips

1.

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
