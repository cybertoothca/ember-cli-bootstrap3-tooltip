import { render, find, findAll, click } from '@ember/test-helpers';
import { isPresent } from '@ember/utils';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Component | twbs span', function(hooks) {
  setupRenderingTest(hooks);

  test('when no block is passed', async function(assert) {
    await render(hbs`{{twbs-span}}`);
    assert.ok(find('span').classList.contains('twbs-span'));
    assert.equal(find('*').textContent.trim(), '');
  });

  test('when an empty block is passed', async function(assert) {
    await render(hbs`
      {{#twbs-span}}{{/twbs-span}}
    `);
    assert.ok(find('span').classList.contains('twbs-span'));
    assert.equal(find('*').textContent.trim(), '');
    assert.equal(find('span').getAttribute('title'), '');
    assert.equal(find('span').getAttribute('data-original-title'), '');
  });

  test('when a block is passed', async function(assert) {
    await render(hbs`
      {{#twbs-span title="Some sort of title"}}template block text{{/twbs-span}}
    `);
    assert.ok(find('span').classList.contains('twbs-span'));
    assert.equal(findAll('.twbs-tooltip-title').length, 0, 'Just making sure the title component is not being rendered.');
    assert.equal(find('*').textContent.trim(), 'template block text');
    assert.equal(find('span').getAttribute('title'), '', 'The title attribute is cleared');
    assert.equal(find('span').getAttribute('data-original-title'), 'Some sort of title');
    assert.equal(find('span').textContent.trim(), 'template block text');
  });

  test('when a title component is yielded within the block', async function(assert) {
    await render(hbs`
      {{#twbs-span as |span|}}
        Block With Title Component
        {{#span.title}}This is the tooltip{{/span.title}}
      {{/twbs-span}}
    `);
    assert.equal(findAll('.twbs-tooltip-title').length, 1);
    assert.equal(find('.twbs-tooltip-title').textContent, 'This is the tooltip');
  });

  test('when triggering the show and hide action', async function(assert) {
    await render(hbs`
      {{#twbs-span tooltipTrigger="manual" as |span hide show toggle|}}
        Block With Title Component
        {{#span.title}}This is the tooltip{{/span.title}}
        <a {{action hide}} id="js-hide" href="#">Hide</a>
        <a {{action show}} id="js-show" href="#">Show</a>
      {{/twbs-span}}
    `);

    assert.equal(findAll('div.tooltip').length, 0);

    await click('#js-show');
    assert.equal(findAll('div.tooltip.fade.in').length, 1);

    await click('#js-hide');
    assert.equal(findAll('div.tooltip.fade').length, 1);
    assert.equal(findAll('div.tooltip.fade.in').length, 0);
  });

  test('when triggering the toggle action', async function(assert) {
    await render(hbs`
      {{#twbs-span tooltipTrigger="manual" as |span hide show toggle|}}
        Block With Title Component
        {{#span.title}}This is the tooltip{{/span.title}}
        <a {{action toggle}} id="js-toggle" href="#">Toggle</a>
      {{/twbs-span}}
    `);

    assert.equal(findAll('div.tooltip').length, 0);

    await click('#js-toggle');
    assert.equal(findAll('div.tooltip.fade.in').length, 1);

    await click('#js-toggle');
    assert.equal(findAll('div.tooltip.fade').length, 1);
    assert.equal(findAll('div.tooltip.fade.in').length, 0);
  });

  // TODO: this should be moved into an integration test to capitalize on the andThen helper
  test('when binding to the onHide event', async function(assert) {
    let isHide = false, isHidden = false, isInserted = false, isShow = false, isShown = false;

    this.setProperties({
      onHideAction: function($element, component) {
        isHide = true;
        assert.ok(isPresent($element));
        assert.ok(isPresent(component));
      },
      onHiddenAction: function(/*$element, component*/) {
        isHidden = true;
        // assert.ok(Ember.isPresent($element));
        // assert.ok(Ember.isPresent(component));
      },
      onInsertedAction: function($element, component) {
        isInserted = true;
        assert.ok(isPresent($element));
        assert.ok(isPresent(component));
      },
      onShowAction: function($element, component) {
        isShow = true;
        assert.ok(isPresent($element));
        assert.ok(isPresent(component));
      },
      onShownAction: function(/*$element, component*/) {
        isShown = true;
        // assert.ok(Ember.isPresent($element));
        // assert.ok(Ember.isPresent(component));
      }
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
