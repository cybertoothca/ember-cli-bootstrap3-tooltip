import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('twbs-abbr', 'Integration | Component | twbs abbr', {
  integration: true
});

test('when no block is passed', function (assert) {
  this.render(hbs`{{twbs-abbr}}`);
  assert.ok(this.$('abbr').hasClass('twbs-abbr'));
  assert.equal(this.$().text().trim(), '');
});

test('when an empty block is passed', function (assert) {
  this.render(hbs`
    {{#twbs-abbr}}{{/twbs-abbr}}
  `);
  assert.ok(this.$('abbr').hasClass('twbs-abbr'));
  assert.equal(this.$().text().trim(), '');
  assert.equal(this.$('abbr').attr('title'), '');
  assert.equal(this.$('abbr').attr('data-original-title'), '');
});

test('when a block is passed', function (assert) {
  this.render(hbs`
    {{#twbs-abbr title="Some sort of title"}}template block text{{/twbs-abbr}}
  `);
  assert.ok(this.$('abbr').hasClass('twbs-abbr'));
  assert.equal(this.$().text().trim(), 'template block text');
  assert.equal(this.$('abbr').attr('title'), '', 'The title attribute is cleared');
  assert.equal(this.$('abbr').attr('data-original-title'), 'Some sort of title');
  assert.equal(this.$('abbr').text().trim(), 'template block text');
});

test('when rendering with the class `initialism`', function (assert) {
  this.render(hbs`
    {{#twbs-abbr title="Some tooltip message." classNames='initialism'}}ABBR{{/twbs-abbr}}
  `);
  assert.ok(this.$('abbr').hasClass('initialism'), 'The `initialism` class is present.');
});
