import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import Ember from 'ember';

export default Controller.extend({
  actions: {
    fireEvent(labelId/*, $element, component*/) {
      const $label = Ember.$(labelId);

      $label
        .removeClass('label-default')
        .addClass('label-success');

      Ember.run.later(this, () => {
        $label
          .removeClass('label-success')
          .addClass('label-warning');

        Ember.run.later(this, () => {
          $label
            .removeClass('label-warning')
            .addClass('label-danger');
          Ember.run.later(this, () => {
            $label
              .removeClass('label-danger')
              .addClass('label-default');
          }, 1000);
        }, 1000);
      }, 1000);
    }
  },

  clock: service()
});
