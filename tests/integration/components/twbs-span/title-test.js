import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

import { render } from '@ember/test-helpers';

module('Integration | Component | twbs span/title', function (hooks) {
  setupRenderingTest(hooks);

  test('when registering the body html is provided', async function (assert) {
    let isRegistered = false;
    let htmlBlock = null;
    this.set('register', function (registeredHtmlBlock) {
      isRegistered = true;
      htmlBlock = registeredHtmlBlock;
    });

    await render(hbs`{{#twbs-span/title register=register}}Some Block{{/twbs-span/title}}`);

    assert.ok(isRegistered);
    assert.dom(htmlBlock).hasClass('twbs-tooltip-title');
    assert.equal(htmlBlock.innerHTML, 'Some Block');
  });

  test('when rendered the element is completely hidden', async function (assert) {
    this.set('register', function () {
      // do nothing
    });

    await render(hbs`{{#twbs-span/title register=register}}Some Block{{/twbs-span/title}}`);

    assert.dom('.twbs-span-title').hasClass('hidden');
  });
});
