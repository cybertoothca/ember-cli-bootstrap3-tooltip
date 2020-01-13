import { render, find } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Component | twbs cite', function(hooks) {
  setupRenderingTest(hooks);

  test('when no block is passed', async function(assert) {
    await render(hbs`{{twbs-cite}}`);
    assert.ok(find('cite').classList.contains('twbs-cite'));
    assert.equal(find('*').textContent.trim(), '');
    assert.notOk(find('cite').classList.contains('twbs-span'));
  });

  test('when an empty block is passed', async function(assert) {
    await render(hbs`
      {{#twbs-cite}}{{/twbs-cite}}
    `);
    assert.ok(find('cite').classList.contains('twbs-cite'));
    assert.equal(find('*').textContent.trim(), '');
    assert.equal(find('cite').getAttribute('title'), '');
    assert.equal(find('cite').getAttribute('data-original-title'), '');
    assert.notOk(find('cite').classList.contains('twbs-span'));
  });

  test('when a block is passed', async function(assert) {
    await render(hbs`
      {{#twbs-cite title="Some sort of title"}}template block text{{/twbs-cite}}
    `);
    assert.ok(find('cite').classList.contains('twbs-cite'));
    assert.equal(find('*').textContent.trim(), 'template block text');
    assert.equal(find('cite').getAttribute('title'), '', 'The title attribute is cleared');
    assert.equal(find('cite').getAttribute('data-original-title'), 'Some sort of title');
    assert.equal(find('cite').textContent.trim(), 'template block text');
    assert.notOk(find('cite').classList.contains('twbs-span'));
  });
});
