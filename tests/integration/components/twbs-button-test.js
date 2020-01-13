import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Component | twbs button', function(hooks) {
  setupRenderingTest(hooks);

  test('when without a block its class is set properly', async function(assert) {
    await render(hbs`{{twbs-button}}`);

    assert.ok(this.$('button').hasClass('twbs-button'));
    assert.notOk(this.$('button').hasClass('twbs-span'));
  });

  test('when with a block its class is set properly', async function(assert) {
    await render(hbs`
      {{#twbs-button}}
        template block text
      {{/twbs-button}}
    `);
    assert.ok(this.$('button').hasClass('twbs-button'));
    assert.notOk(this.$('button').hasClass('twbs-span'));
  });

  test('when supplying the autofocus attribute', async function(assert) {
    await render(hbs`{{twbs-button autofocus=true}}`);

    assert.ok(this.$('button').attr('autofocus'));
  });

  test('when supplying the disabled attribute', async function(assert) {
    await render(hbs`{{twbs-button disabled=true}}`);

    assert.ok(this.$('button').attr('disabled'));
  });

  test('when supplying the form attribute', async function(assert) {
    await render(hbs`{{twbs-button form="true"}}`);

    assert.ok(this.$('button').attr('form'));
  });

  test('when supplying the formaction attribute', async function(assert) {
    await render(hbs`{{twbs-button formaction="true"}}`);

    assert.ok(this.$('button').attr('formaction'));
  });

  test('when supplying the formenctype attribute', async function(assert) {
    await render(hbs`{{twbs-button formenctype="true"}}`);

    assert.ok(this.$('button').attr('formenctype'));
  });

  test('when supplying the formmethod attribute', async function(assert) {
    await render(hbs`{{twbs-button formmethod="true"}}`);

    assert.ok(this.$('button').attr('formmethod'));
  });

  test('when supplying the formnovalidate attribute', async function(assert) {
    await render(hbs`{{twbs-button formnovalidate="true"}}`);

    assert.ok(this.$('button').attr('formnovalidate'));
  });

  test('when supplying the formtarget attribute', async function(assert) {
    await render(hbs`{{twbs-button formtarget="true"}}`);

    assert.ok(this.$('button').attr('formtarget'));
  });

  test('when supplying the name attribute', async function(assert) {
    await render(hbs`{{twbs-button name="true"}}`);

    assert.ok(this.$('button').attr('name'));
  });

  test('when supplying the type attribute', async function(assert) {
    await render(hbs`{{twbs-button type="true"}}`);

    assert.ok(this.$('button').attr('type'));
  });

  test('when supplying the value attribute', async function(assert) {
    await render(hbs`{{twbs-button value=true}}`);

    assert.ok(this.$('button').attr('value'));
  });
});
