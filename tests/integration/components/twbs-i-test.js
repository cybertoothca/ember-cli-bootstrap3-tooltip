import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('twbs-i', 'Integration | Component | twbs i', {
  integration: true
});

test('when without a block its class is set properly', function (assert) {
  this.render(hbs`{{twbs-i}}`);

  assert.ok(this.$('i').hasClass('twbs-i'));
  assert.notOk(this.$('i').hasClass('twbs-span'));
});

test('when with a block its class is set properly', function (assert) {
  this.render(hbs`
    {{#twbs-i}}
      template block text
    {{/twbs-i}}
  `);
  assert.ok(this.$('i').hasClass('twbs-i'));
  assert.notOk(this.$('i').hasClass('twbs-span'));
});
