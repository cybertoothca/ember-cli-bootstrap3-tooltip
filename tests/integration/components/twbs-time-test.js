import { find, render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Component | twbs time', function (hooks) {
  setupRenderingTest(hooks);

  test('when without a block its class is set properly', async function (assert) {
    await render(hbs`{{twbs-time}}`);

    assert.dom('time').hasClass('twbs-time');
    assert.dom('time').hasNoClass('twbs-span');
  });

  test('when with a block its class is set properly', async function (assert) {
    await render(hbs`
      {{#twbs-time}}
        template block text
      {{/twbs-time}}
    `);

    assert.dom('time').hasClass('twbs-time');
    assert.dom('time').hasNoClass('twbs-span');
  });

  test('when supplying the datetime attribute', async function (assert) {
    await render(hbs`{{twbs-time datetime="true"}}`);

    assert.ok(find('time').getAttribute('datetime'));
  });
});
