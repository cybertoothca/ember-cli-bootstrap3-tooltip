import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Component | twbs i', function(hooks) {
  setupRenderingTest(hooks);

  test('when without a block its class is set properly', async function(assert) {
    await render(hbs`{{twbs-i}}`);

    assert.dom('i').hasClass('twbs-i');
    assert.dom('i').hasNoClass('twbs-span');
  });

  test('when with a block its class is set properly', async function(assert) {
    await render(hbs`
      {{#twbs-i}}
        template block text
      {{/twbs-i}}
    `);
    assert.dom('i').hasClass('twbs-i');
    assert.dom('i').hasNoClass('twbs-span');
  });
});
