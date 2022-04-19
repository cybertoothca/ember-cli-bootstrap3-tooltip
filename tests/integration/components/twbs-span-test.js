import { click, render } from '@ember/test-helpers';
import { isPresent } from '@ember/utils';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Component | twbs span', function (hooks) {
  setupRenderingTest(hooks);

  test('when no block is passed', async function (assert) {
    await render(hbs`{{twbs-span}}`);
    assert.dom('span').hasClass('twbs-span');
    assert.dom('*').hasText('');
  });

  test('when an empty block is passed', async function (assert) {
    await render(hbs`
      {{#twbs-span}}{{/twbs-span}}
    `);
    assert.dom('span').hasClass('twbs-span');
    assert.dom('*').hasText('');
    assert.dom('span').hasAttribute('title', '');
    assert.dom('span').hasAttribute('data-original-title', '');
  });

  test('when a block is passed', async function (assert) {
    await render(hbs`
      {{#twbs-span title="Some sort of title"}}template block text{{/twbs-span}}
    `);
    assert.dom('span').hasClass('twbs-span');
    assert.dom('.twbs-tooltip-title').doesNotExist('Just making sure the title component is not being rendered.');
    assert.dom('*').hasText('template block text');
    assert.dom('span').hasAttribute('title', '', 'The title attribute is cleared');
    assert.dom('span').hasAttribute('data-original-title', 'Some sort of title');
    assert.dom('span').hasText('template block text');
  });

  test('when a title component is yielded within the block', async function (assert) {
    await render(hbs`
      {{#twbs-span as |span|}}
        Block With Title Component
        {{#span.title}}This is the tooltip{{/span.title}}
      {{/twbs-span}}
    `);
    assert.dom('.twbs-tooltip-title').exists({ count: 1 });
    assert.dom('.twbs-tooltip-title').hasText('This is the tooltip');
  });

  test('when triggering the show and hide action', async function (assert) {
    await render(hbs`
      {{#twbs-span tooltipTrigger="manual" as |span hide show toggle|}}
        Block With Title Component
        {{#span.title}}This is the tooltip{{/span.title}}
        <a {{action hide}} id="js-hide" href="#">Hide</a>
        <a {{action show}} id="js-show" href="#">Show</a>
      {{/twbs-span}}
    `);

    assert.dom('div.tooltip').doesNotExist();

    await click('#js-show');
    assert.dom('div.tooltip.fade.in').exists({ count: 1 });

    await click('#js-hide');
    assert.dom('div.tooltip.fade').exists({ count: 1 });
    assert.dom('div.tooltip.fade.in').doesNotExist();
  });

  test('when triggering the toggle action', async function (assert) {
    await render(hbs`
      {{#twbs-span tooltipTrigger="manual" as |span hide show toggle|}}
        Block With Title Component
        {{#span.title}}This is the tooltip{{/span.title}}
        <a {{action toggle}} id="js-toggle" href="#">Toggle</a>
      {{/twbs-span}}
    `);

    assert.dom('div.tooltip').doesNotExist();

    await click('#js-toggle');
    assert.dom('div.tooltip.fade.in').exists({ count: 1 });

    await click('#js-toggle');
    assert.dom('div.tooltip.fade').exists({ count: 1 });
    assert.dom('div.tooltip.fade.in').doesNotExist();
  });

  // TODO: this should be moved into an integration test to capitalize on the andThen helper
  test('when binding to the onHide event', async function (assert) {
    let isHide = false,
      isHidden = false,
      isInserted = false,
      isShow = false,
      isShown = false;

    this.setProperties({
      onHideAction: function ($element, component) {
        isHide = true;
        assert.ok(isPresent($element));
        assert.ok(isPresent(component));
      },
      onHiddenAction: function (/*$element, component*/) {
        isHidden = true;
        // assert.ok(Ember.isPresent($element));
        // assert.ok(Ember.isPresent(component));
      },
      onInsertedAction: function ($element, component) {
        isInserted = true;
        assert.ok(isPresent($element));
        assert.ok(isPresent(component));
      },
      onShowAction: function ($element, component) {
        isShow = true;
        assert.ok(isPresent($element));
        assert.ok(isPresent(component));
      },
      onShownAction: function (/*$element, component*/) {
        isShown = true;
        // assert.ok(Ember.isPresent($element));
        // assert.ok(Ember.isPresent(component));
      },
    });

    await render(hbs`
      {{#twbs-span
        delay=0 
        onHide=(action onHideAction) 
        onHidden=(action onHiddenAction) 
        onInserted=(action onInsertedAction) 
        onShow=(action onShowAction) 
        onShown=(action onShownAction) 
        title="Some sort of title"
        tooltipTrigger="click"}}template block text{{/twbs-span}}
    `);

    assert.notOk(isInserted, 'hidden.bs.tooltip HAS NOT YET fired.');
    assert.notOk(isShow, 'show.bs.tooltip HAS NOT YET fired.');
    assert.notOk(isShown, 'shown.bs.tooltip HAS NOT YET fired.');
    assert.notOk(isHide, 'hide.bs.tooltip HAS NOT YET fired.');
    assert.notOk(isHidden, 'hidden.bs.tooltip HAS NOT YET fired.');

    await click('.twbs-span');

    assert.ok(isInserted, 'hidden.bs.tooltip fired.');
    assert.ok(isShow, 'show.bs.tooltip fired.');
    assert.notOk(isShown, 'shown.bs.tooltip HAS NOT YET fired.');
    assert.notOk(isHide, 'hide.bs.tooltip HAS NOT YET fired.');
    assert.notOk(isHidden, 'hidden.bs.tooltip HAS NOT YET fired.');

    await click('.twbs-span');

    assert.ok(isInserted, 'hidden.bs.tooltip fired.');
    assert.ok(isShow, 'show.bs.tooltip fired.');
    assert.notOk(isShown, 'shown.bs.tooltip HAS NOT YET fired.');
    assert.ok(isHide, 'hide.bs.tooltip HAS NOT YET fired.');
    assert.notOk(isHidden, 'hidden.bs.tooltip HAS NOT YET fired.');
  });
});
