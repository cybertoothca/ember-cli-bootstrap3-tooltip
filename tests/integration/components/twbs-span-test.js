import {moduleForComponent, test} from 'ember-qunit';
import Ember from 'ember';
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
  assert.equal(this.$('.twbs-tooltip-title').length, 0, 'Just making sure the title component is not being rendered.');
  assert.equal(this.$().text().trim(), 'template block text');
  assert.equal(this.$('span').attr('title'), '', 'The title attribute is cleared');
  assert.equal(this.$('span').attr('data-original-title'), 'Some sort of title');
  assert.equal(this.$('span').text().trim(), 'template block text');
});

test('when a title component is yielded within the block', function (assert) {
  this.render(hbs`
    {{#twbs-span as |span|}}
      Block With Title Component
      {{#span.title}}This is the tooltip{{/span.title}}
    {{/twbs-span}}
  `);
  assert.equal(this.$('.twbs-tooltip-title').length, 1);
  assert.equal(this.$('.twbs-tooltip-title').text(), 'This is the tooltip');
});

test('when triggering the show and hide action', function (assert) {
  this.render(hbs`
    {{#twbs-span tooltipTrigger="manual" as |span hide show toggle|}}
      Block With Title Component
      {{#span.title}}This is the tooltip{{/span.title}}
      <a {{action hide}} id="js-hide" href="#">Hide</a>
      <a {{action show}} id="js-show" href="#">Show</a>
    {{/twbs-span}}
  `);

  assert.equal(this.$('div.tooltip').length, 0);

  this.$('#js-show').trigger('click');
  assert.equal(this.$('div.tooltip.fade.in').length, 1);

  this.$('#js-hide').trigger('click');
  assert.equal(this.$('div.tooltip.fade').length, 1);
  assert.equal(this.$('div.tooltip.fade.in').length, 0);
});

test('when triggering the toggle action', function (assert) {
  this.render(hbs`
    {{#twbs-span tooltipTrigger="manual" as |span hide show toggle|}}
      Block With Title Component
      {{#span.title}}This is the tooltip{{/span.title}}
      <a {{action toggle}} id="js-toggle" href="#">Toggle</a>
    {{/twbs-span}}
  `);

  assert.equal(this.$('div.tooltip').length, 0);

  this.$('#js-toggle').trigger('click');
  assert.equal(this.$('div.tooltip.fade.in').length, 1);

  this.$('#js-toggle').trigger('click');
  assert.equal(this.$('div.tooltip.fade').length, 1);
  assert.equal(this.$('div.tooltip.fade.in').length, 0);
});

// TODO: this should be moved into an integration test to capitalize on the andThen helper
test('when binding to the onHide event', function (assert) {
  let isHide = false, isHidden = false, isInserted = false, isShow = false, isShown = false;

  this.setProperties({
    onHideAction: function ($element, component) {
      isHide = true;
      assert.ok(Ember.isPresent($element));
      assert.ok(Ember.isPresent(component));
    },
    onHiddenAction: function (/*$element, component*/) {
      isHidden = true;
      // assert.ok(Ember.isPresent($element));
      // assert.ok(Ember.isPresent(component));
    },
    onInsertedAction: function ($element, component) {
      isInserted = true;
      assert.ok(Ember.isPresent($element));
      assert.ok(Ember.isPresent(component));
    },
    onShowAction: function ($element, component) {
      isShow = true;
      assert.ok(Ember.isPresent($element));
      assert.ok(Ember.isPresent(component));
    },
    onShownAction: function (/*$element, component*/) {
      isShown = true;
      // assert.ok(Ember.isPresent($element));
      // assert.ok(Ember.isPresent(component));
    }
  });

  this.render(hbs`
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

  this.$('.twbs-span').trigger('click');

  assert.ok(isInserted, 'hidden.bs.tooltip fired.');
  assert.ok(isShow, 'show.bs.tooltip fired.');
  assert.notOk(isShown, 'shown.bs.tooltip HAS NOT YET fired.');
  assert.notOk(isHide, 'hide.bs.tooltip HAS NOT YET fired.');
  assert.notOk(isHidden, 'hidden.bs.tooltip HAS NOT YET fired.');

  this.$('.twbs-span').trigger('click');

  assert.ok(isInserted, 'hidden.bs.tooltip fired.');
  assert.ok(isShow, 'show.bs.tooltip fired.');
  assert.notOk(isShown, 'shown.bs.tooltip HAS NOT YET fired.');
  assert.ok(isHide, 'hide.bs.tooltip HAS NOT YET fired.');
  assert.notOk(isHidden, 'hidden.bs.tooltip HAS NOT YET fired.');
});
