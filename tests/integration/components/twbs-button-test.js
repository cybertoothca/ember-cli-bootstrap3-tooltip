import {moduleForComponent, test} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('twbs-button', 'Integration | Component | twbs button', {
  integration: true
});

test('when without a block its class is set properly', function (assert) {
  this.render(hbs`{{twbs-button}}`);

  assert.ok(this.$('button').hasClass('twbs-button'));
  assert.notOk(this.$('button').hasClass('twbs-span'));
});

test('when with a block its class is set properly', function (assert) {
  this.render(hbs`
    {{#twbs-button}}
      template block text
    {{/twbs-button}}
  `);
  assert.ok(this.$('button').hasClass('twbs-button'));
  assert.notOk(this.$('button').hasClass('twbs-span'));
});

test('when supplying the autofocus attribute', function (assert) {
  this.render(hbs`{{twbs-button autofocus=true}}`);

  assert.ok(this.$('button').attr('autofocus'));
});
'formtarget',
  'name',
  'type',
  'value';

test('when supplying the disabled attribute', function (assert) {
  this.render(hbs`{{twbs-button disabled=true}}`);

  assert.ok(this.$('button').attr('disabled'));
});

test('when supplying the form attribute', function (assert) {
  this.render(hbs`{{twbs-button form="true"}}`);

  assert.ok(this.$('button').attr('form'));
});

test('when supplying the formaction attribute', function (assert) {
  this.render(hbs`{{twbs-button formaction="true"}}`);

  assert.ok(this.$('button').attr('formaction'));
});

test('when supplying the formenctype attribute', function (assert) {
  this.render(hbs`{{twbs-button formenctype="true"}}`);

  assert.ok(this.$('button').attr('formenctype'));
});

test('when supplying the formmethod attribute', function (assert) {
  this.render(hbs`{{twbs-button formmethod="true"}}`);

  assert.ok(this.$('button').attr('formmethod'));
});

test('when supplying the formnovalidate attribute', function (assert) {
  this.render(hbs`{{twbs-button formnovalidate="true"}}`);

  assert.ok(this.$('button').attr('formnovalidate'));
});

test('when supplying the formtarget attribute', function (assert) {
  this.render(hbs`{{twbs-button formtarget="true"}}`);

  assert.ok(this.$('button').attr('formtarget'));
});

test('when supplying the name attribute', function (assert) {
  this.render(hbs`{{twbs-button name="true"}}`);

  assert.ok(this.$('button').attr('name'));
});

test('when supplying the type attribute', function (assert) {
  this.render(hbs`{{twbs-button type="true"}}`);

  assert.ok(this.$('button').attr('type'));
});

test('when supplying the value attribute', function (assert) {
  this.render(hbs`{{twbs-button value=true}}`);

  assert.ok(this.$('button').attr('value'));
});
