import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('twbs-time', 'Integration | Component | twbs time', {
  integration: true
});

test('when without a block its class is set properly', function (assert) {
  this.render(hbs`{{twbs-time}}`);

  assert.ok(this.$('time').hasClass('twbs-time'));
  assert.notOk(this.$('time').hasClass('twbs-span'));
});

test('when with a block its class is set properly', function (assert) {
  this.render(hbs`
    {{#twbs-time}}
      template block text
    {{/twbs-time}}
  `);

  assert.ok(this.$('time').hasClass('twbs-time'));
  assert.notOk(this.$('time').hasClass('twbs-span'));
});

test('when supplying the datetime attribute', function (assert) {
  this.render(hbs`{{twbs-time datetime="true"}}`);

  assert.ok(this.$('time').attr('datetime'));
});
