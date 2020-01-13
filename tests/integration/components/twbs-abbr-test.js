import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Component | twbs abbr', function(hooks) {
  setupRenderingTest(hooks);

  test('when no block is passed', async function(assert) {
    await render(hbs`{{twbs-abbr}}`);

    assert.ok(this.$('abbr').hasClass('twbs-abbr'));
    assert.equal(this.$().text().trim(), '');
    assert.notOk(this.$('abbr').hasClass('twbs-span'));
  });

  test('when an empty block is passed', async function(assert) {
    await render(hbs`
      {{#twbs-abbr}}{{/twbs-abbr}}
    `);
    assert.ok(this.$('abbr').hasClass('twbs-abbr'));
    assert.equal(this.$().text().trim(), '');
    assert.equal(this.$('abbr').attr('title'), '');
    assert.equal(this.$('abbr').attr('data-original-title'), '');
    assert.notOk(this.$('abbr').hasClass('twbs-span'));
  });

  test('when a block is passed', async function(assert) {
    await render(hbs`
      {{#twbs-abbr title="Some sort of title"}}template block text{{/twbs-abbr}}
    `);
    assert.ok(this.$('abbr').hasClass('twbs-abbr'));
    assert.equal(this.$().text().trim(), 'template block text');
    assert.equal(this.$('abbr').attr('title'), '', 'The title attribute is cleared');
    assert.equal(this.$('abbr').attr('data-original-title'), 'Some sort of title');
    assert.equal(this.$('abbr').text().trim(), 'template block text');
    assert.notOk(this.$('abbr').hasClass('twbs-span'));
  });

  test('when rendering with the class `initialism`', async function(assert) {
    await render(hbs`
      {{#twbs-abbr title="Some tooltip message." class='initialism'}}ABBR{{/twbs-abbr}}
    `);
    assert.ok(this.$('abbr').hasClass('initialism'), 'The `initialism` class is present.');
  });
});
