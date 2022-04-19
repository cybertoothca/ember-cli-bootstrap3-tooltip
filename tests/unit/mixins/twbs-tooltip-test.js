import EmberObject from '@ember/object';
import TwbsTooltipMixin from 'ember-cli-bootstrap3-tooltip/mixins/twbs-tooltip';
import { module, test } from 'qunit';

module('Unit | Mixin | twbs tooltip', function () {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let TwbsTooltipObject = EmberObject.extend(TwbsTooltipMixin);
    let subject = TwbsTooltipObject.create();
    assert.ok(subject);
  });
});
