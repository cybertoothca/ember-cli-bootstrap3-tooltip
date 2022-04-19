import Controller from '@ember/controller';
import { later } from '@ember/runloop';
import { inject as service } from '@ember/service';
import $ from 'jquery';

export default Controller.extend({
  actions: {
    fireEvent(labelId /*, $element, component*/) {
      const $label = $(labelId);

      $label.removeClass('label-default').addClass('label-success');

      later(
        this,
        () => {
          $label.removeClass('label-success').addClass('label-warning');

          later(
            this,
            () => {
              $label.removeClass('label-warning').addClass('label-danger');
              later(
                this,
                () => {
                  $label.removeClass('label-danger').addClass('label-default');
                },
                1000
              );
            },
            1000
          );
        },
        1000
      );
    },
  },

  clock: service(),
});
