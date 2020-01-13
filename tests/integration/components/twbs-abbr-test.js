import { render, find } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Component | twbs abbr', function(hooks) {
  setupRenderingTest(hooks);

  test('when no block is passed', async function(assert) {
    await render(hbs`{{twbs-abbr}}`);

    assert.ok(find('abbr').classList.contains('twbs-abbr'));
    assert.equal(find('*').textContent.trim(), '');
    assert.notOk(find('abbr').classList.contains('twbs-span'));
  });

  test('when an empty block is passed', async function(assert) {
    await render(hbs`
      {{#twbs-abbr}}{{/twbs-abbr}}
    `);
    assert.ok(find('abbr').classList.contains('twbs-abbr'));
    assert.equal(find('*').textContent.trim(), '');
    assert.equal(find('abbr').getAttribute('title'), '');
    assert.equal(find('abbr').getAttribute('data-original-title'), '');
    assert.notOk(find('abbr').classList.contains('twbs-span'));
  });

  test('when a block is passed', async function(assert) {
    await render(hbs`
      {{#twbs-abbr title="Some sort of title"}}template block text{{/twbs-abbr}}
    `);
    assert.ok(find('abbr').classList.contains('twbs-abbr'));
    assert.equal(find('*').textContent.trim(), 'template block text');
    assert.equal(find('abbr').getAttribute('title'), '', 'The title attribute is cleared');
    assert.equal(find('abbr').getAttribute('data-original-title'), 'Some sort of title');
    assert.equal(find('abbr').textContent.trim(), 'template block text');
    assert.notOk(find('abbr').classList.contains('twbs-span'));
  });

  test('when rendering with the class `initialism`', async function(assert) {
    await render(hbs`
      {{#twbs-abbr title="Some tooltip message." class='initialism'}}ABBR{{/twbs-abbr}}
    `);
    assert.ok(find('abbr').classList.contains('initialism'), 'The `initialism` class is present.');
  });
});
