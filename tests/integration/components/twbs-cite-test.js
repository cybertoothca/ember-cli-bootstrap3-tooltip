import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Component | twbs cite', function(hooks) {
  setupRenderingTest(hooks);

  test('when no block is passed', async function(assert) {
    await render(hbs`{{twbs-cite}}`);
    assert.ok(this.$('cite').hasClass('twbs-cite'));
    assert.equal(this.$().text().trim(), '');
    assert.notOk(this.$('cite').hasClass('twbs-span'));
  });

  test('when an empty block is passed', async function(assert) {
    await render(hbs`
      {{#twbs-cite}}{{/twbs-cite}}
    `);
    assert.ok(this.$('cite').hasClass('twbs-cite'));
    assert.equal(this.$().text().trim(), '');
    assert.equal(this.$('cite').attr('title'), '');
    assert.equal(this.$('cite').attr('data-original-title'), '');
    assert.notOk(this.$('cite').hasClass('twbs-span'));
  });

  test('when a block is passed', async function(assert) {
    await render(hbs`
      {{#twbs-cite title="Some sort of title"}}template block text{{/twbs-cite}}
    `);
    assert.ok(this.$('cite').hasClass('twbs-cite'));
    assert.equal(this.$().text().trim(), 'template block text');
    assert.equal(this.$('cite').attr('title'), '', 'The title attribute is cleared');
    assert.equal(this.$('cite').attr('data-original-title'), 'Some sort of title');
    assert.equal(this.$('cite').text().trim(), 'template block text');
    assert.notOk(this.$('cite').hasClass('twbs-span'));
  });
});
