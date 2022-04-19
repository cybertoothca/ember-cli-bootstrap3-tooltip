import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    const sept11 = new Date(2001, 8, 11);
    return {
      timeDemoString: sept11.toString(),
      timeDemoISOString: sept11.toISOString(),
    };
  },
});
