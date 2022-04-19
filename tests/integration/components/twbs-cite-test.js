import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Component | twbs cite', function (hooks) {
  setupRenderingTest(hooks);

  test('when no block is passed', async function (assert) {
    await render(hbs`{{twbs-cite}}`);
    assert.dom('cite').hasClass('twbs-cite');
    assert.dom('*').hasText('');
    assert.dom('cite').hasNoClass('twbs-span');
  });

  test('when an empty block is passed', async function (assert) {
    await render(hbs`
      {{#twbs-cite}}{{/twbs-cite}}
    `);
    assert.dom('cite').hasClass('twbs-cite');
    assert.dom('*').hasText('');
    assert.dom('cite').hasAttribute('title', '');
    assert.dom('cite').hasAttribute('data-original-title', '');
    assert.dom('cite').hasNoClass('twbs-span');
  });

  test('when a block is passed', async function (assert) {
    await render(hbs`
      {{#twbs-cite title="Some sort of title"}}template block text{{/twbs-cite}}
    `);
    assert.dom('cite').hasClass('twbs-cite');
    assert.dom('*').hasText('template block text');
    assert.dom('cite').hasAttribute('title', '', 'The title attribute is cleared');
    assert.dom('cite').hasAttribute('data-original-title', 'Some sort of title');
    assert.dom('cite').hasText('template block text');
    assert.dom('cite').hasNoClass('twbs-span');
  });
});
