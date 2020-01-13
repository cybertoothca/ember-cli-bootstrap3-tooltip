import { render, find } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Component | twbs i', function(hooks) {
  setupRenderingTest(hooks);

  test('when without a block its class is set properly', async function(assert) {
    await render(hbs`{{twbs-i}}`);

    assert.ok(find('i').classList.contains('twbs-i'));
    assert.notOk(find('i').classList.contains('twbs-span'));
  });

  test('when with a block its class is set properly', async function(assert) {
    await render(hbs`
      {{#twbs-i}}
        template block text
      {{/twbs-i}}
    `);
    assert.ok(find('i').classList.contains('twbs-i'));
    assert.notOk(find('i').classList.contains('twbs-span'));
  });
});
