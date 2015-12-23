export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'example/welcome',            nav: true,  title: 'Welcome' },
      { route: 'users',         name: 'users',        moduleId: 'example/users',              nav: true,  title: 'Github Users' },
      { route: 'child-router',  name: 'child-router', moduleId: 'example/child-router',       nav: true,  title: 'Child Router' },
      { route: 'materialize',   name: 'materialize',  moduleId: 'materialize-example/index',  nav: false, title: 'Materialize' }
    ]);

    this.router = router;
  }
}
