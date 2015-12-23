export class MaterializeExample {
  configureRouter(config, router) {
    config.map([
      { route: [''],            name: 'index',        moduleId: 'materialize-example/index',        nav: false, title: 'Materialize' },
      { route: 'collapsible',   name: 'collapsible',  moduleId: 'materialize-example/collapsible',  nav: true,  title: 'Collapsible' },
      { route: 'side-nav',      name: 'side-nav',     moduleId: 'materialize-example/side-nav',     nav: true,  title: 'Side Nav' },
      { route: 'dropdown',      name: 'dropdown',     moduleId: 'materialize-example/dropdown',     nav: true,  title: 'Dropdown' }
    ]);

    this.router = router;
  }
}