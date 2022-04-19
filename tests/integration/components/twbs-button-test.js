import { find, render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Component | twbs button', function (hooks) {
  setupRenderingTest(hooks);

  test('when without a block its class is set properly', async function (assert) {
    await render(hbs`{{twbs-button}}`);

    assert.dom('button').hasClass('twbs-button');
    assert.dom('button').hasNoClass('twbs-span');
  });

  test('when with a block its class is set properly', async function (assert) {
    await render(hbs`
      {{#twbs-button}}
        template block text
      {{/twbs-button}}
    `);
    assert.dom('button').hasClass('twbs-button');
    assert.dom('button').hasNoClass('twbs-span');
  });

  test('when supplying the autofocus attribute', async function (assert) {
    await render(hbs`{{twbs-button autofocus=true}}`);

    assert.ok(find('button').hasAttribute('autofocus'));
  });

  test('when supplying the disabled attribute', async function (assert) {
    await render(hbs`{{twbs-button disabled=true}}`);

    assert.ok(find('button').hasAttribute('disabled'));
  });

  test('when supplying the form attribute', async function (assert) {
    await render(hbs`{{twbs-button form="true"}}`);

    assert.ok(find('button').getAttribute('form'));
  });

  test('when supplying the formaction attribute', async function (assert) {
    await render(hbs`{{twbs-button formaction="true"}}`);

    assert.ok(find('button').getAttribute('formaction'));
  });

  test('when supplying the formenctype attribute', async function (assert) {
    await render(hbs`{{twbs-button formenctype="true"}}`);

    assert.ok(find('button').getAttribute('formenctype'));
  });

  test('when supplying the formmethod attribute', async function (assert) {
    await render(hbs`{{twbs-button formmethod="true"}}`);

    assert.ok(find('button').getAttribute('formmethod'));
  });

  test('when supplying the formnovalidate attribute', async function (assert) {
    await render(hbs`{{twbs-button formnovalidate="true"}}`);

    assert.ok(find('button').getAttribute('formnovalidate'));
  });

  test('when supplying the formtarget attribute', async function (assert) {
    await render(hbs`{{twbs-button formtarget="true"}}`);

    assert.ok(find('button').getAttribute('formtarget'));
  });

  test('when supplying the name attribute', async function (assert) {
    await render(hbs`{{twbs-button name="true"}}`);

    assert.ok(find('button').getAttribute('name'));
  });

  test('when supplying the type attribute', async function (assert) {
    await render(hbs`{{twbs-button type="true"}}`);

    assert.ok(find('button').getAttribute('type'));
  });

  test('when supplying the value attribute', async function (assert) {
    await render(hbs`{{twbs-button value=true}}`);

    assert.ok(find('button').getAttribute('value'));
  });
});
