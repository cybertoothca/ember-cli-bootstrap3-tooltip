import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('twbs-span/title', 'Integration | Component | twbs span/title', {
  integration: true
});

test('when registering the body html is provided', function (assert) {
  let isRegistered = false;
  let htmlBlock = null;
  this.set('register', function (registeredHtmlBlock) {
    isRegistered = true;
    htmlBlock = registeredHtmlBlock;
  });

  this.render(hbs`{{#twbs-span/title register=register}}Some Block{{/twbs-span/title}}`);

  assert.ok(isRegistered);
  assert.ok(htmlBlock.hasClass('twbs-tooltip-title'));
  assert.equal(htmlBlock.html(), 'Some Block');
});

test('when rendered the element is completely hidden', function (assert) {
  this.set('register', function () {
    // do nothing
  });

  this.render(hbs`{{#twbs-span/title register=register}}Some Block{{/twbs-span/title}}`);

  assert.equal(this.$('.twbs-span-title').css('display'), 'none');
  assert.ok(this.$('.twbs-span-title').hasClass('hidden'));
});
