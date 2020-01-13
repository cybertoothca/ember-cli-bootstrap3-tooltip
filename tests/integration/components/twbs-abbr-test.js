import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Component | twbs abbr', function(hooks) {
  setupRenderingTest(hooks);

  test('when no block is passed', async function(assert) {
    await render(hbs`{{twbs-abbr}}`);

    assert.dom('abbr').hasClass('twbs-abbr');
    assert.dom('*').hasText('');
    assert.dom('abbr').hasNoClass('twbs-span');
  });

  test('when an empty block is passed', async function(assert) {
    await render(hbs`
      {{#twbs-abbr}}{{/twbs-abbr}}
    `);
    assert.dom('abbr').hasClass('twbs-abbr');
    assert.dom('*').hasText('');
    assert.dom('abbr').hasAttribute('title', '');
    assert.dom('abbr').hasAttribute('data-original-title', '');
    assert.dom('abbr').hasNoClass('twbs-span');
  });

  test('when a block is passed', async function(assert) {
    await render(hbs`
      {{#twbs-abbr title="Some sort of title"}}template block text{{/twbs-abbr}}
    `);
    assert.dom('abbr').hasClass('twbs-abbr');
    assert.dom('*').hasText('template block text');
    assert.dom('abbr').hasAttribute('title', '', 'The title attribute is cleared');
    assert.dom('abbr').hasAttribute('data-original-title', 'Some sort of title');
    assert.dom('abbr').hasText('template block text');
    assert.dom('abbr').hasNoClass('twbs-span');
  });

  test('when rendering with the class `initialism`', async function(assert) {
    await render(hbs`
      {{#twbs-abbr title="Some tooltip message." class='initialism'}}ABBR{{/twbs-abbr}}
    `);
    assert.dom('abbr').hasClass('initialism', 'The `initialism` class is present.');
  });
});
