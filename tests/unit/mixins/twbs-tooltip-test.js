import Ember from 'ember';
import TwbsTooltipMixin from 'ember-cli-bootstrap3-tooltip/mixins/twbs-tooltip';
import { module, test } from 'qunit';

module('Unit | Mixin | twbs tooltip');

// Replace this with your real tests.
test('it works', function (assert) {
  let TwbsTooltipObject = Ember.Object.extend(TwbsTooltipMixin);
  let subject = TwbsTooltipObject.create();
  assert.ok(subject);
});
