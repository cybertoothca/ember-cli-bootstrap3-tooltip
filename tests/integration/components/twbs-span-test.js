import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('twbs-span', 'Integration | Component | twbs span', {
  integration: true
});

test('when no block is passed', function (assert) {
  this.render(hbs`{{twbs-span}}`);
  assert.ok(this.$('span').hasClass('twbs-span'));
  assert.equal(this.$().text().trim(), '');
});

test('when an empty block is passed', function (assert) {
  this.render(hbs`
    {{#twbs-span}}{{/twbs-span}}
  `);
  assert.ok(this.$('span').hasClass('twbs-span'));
  assert.equal(this.$().text().trim(), '');
  assert.equal(this.$('span').attr('title'), '');
  assert.equal(this.$('span').attr('data-original-title'), '');
});

test('when a block is passed', function (assert) {
  this.render(hbs`
    {{#twbs-span title="Some sort of title"}}template block text{{/twbs-span}}
  `);
  assert.ok(this.$('span').hasClass('twbs-span'));
  assert.equal(this.$().text().trim(), 'template block text');
  assert.equal(this.$('span').attr('title'), '', 'The title attribute is cleared');
  assert.equal(this.$('span').attr('data-original-title'), 'Some sort of title');
  assert.equal(this.$('span').text().trim(), 'template block text');
});
