# How To Contribute

## Installation

- `git clone git@github.com:cybertoothca/ember-cli-bootstrap3-tooltip.git`
- `cd ember-cli-bootstrap3-tooltip`
- `yarn install`

## Linting

- `yarn lint:hbs`
- `yarn lint:js`
- `yarn lint:js --fix`

## Running tests

- `ember test` – Runs the test suite on the current Ember version
- `ember test --server` – Runs the test suite in "watch mode"
- `ember try:each` – Runs the test suite against multiple Ember versions

## Running the dummy application

- `ember serve`
- Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

## Linking This Addon For Local Testing

### Linking

1. From the command line at the root of **this** project run the
   `npm link` command to _link_ this addon within your local
   node repository.
1. From the _other_ Ember project that you wish to test this addon
   in, execute the following command:
   `npm link ember-cli-bootstrap3-tooltip`.
1. Now in that same _other_ Ember project, you should go into the
   `package.json` and add the ember addon with the version _\*_. It will
   look something like this: `"ember-cli-bootstrap3-tooltip": "*"`. Now
   when/if you execute `npm install` on this _other_ project it
   will know to look for the linked addon rather than fetch it from
   the central repository.

### Unlinking

1. Remove the addon from your local node repository with the following
   command (that can be run anywhere):
   `npm uninstall -g ember-cli-bootstrap3-tooltip`
1. Remove the reference to the `ember-cli-bootstrap3-tooltip`
   in your _other_ project's `package.json`.
1. Run an `npm prune` and `bower prune` from the root of your _other_ project's command line.

### Deploying The Dummy Application

Make sure your `~/.aws/credentials` file has a profile named _cybertooth_
with a valid key and secret,

```
[cybertooth]
aws_access_key_id = <KEY>
aws_secret_access_key = <SECRET>
```

Deploy by invoking the following command: `ember deploy production`

Confirm your changes are showing up in our S3 container: http://ember-cli-bootstrap3-tooltip.cybertooth.io/

## Releasing & Publishing To NPM

The steps are listed below; roll the version, push the changes to Git, publish to NPM, and update the demo website.

```
npm version x.y.z-sub.#
git push
git push --tags
npm publish
ember deploy production
```
