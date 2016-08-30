(function (global) {

    // map tells the System loader where to look for things
    var map = {
        'app': 'app', // 'dist',
        'rxjs': 'angular2/rxjs',
        'angular2-in-memory-web-api': 'angular2/angular2-in-memory-web-api',
        '@angular': 'angular2/@angular'
    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app': { main:'main.module.js', defaultExtension: 'js' },
        'rxjs': { defaultExtension: 'js' },
        'angular2-in-memory-web-api': { defaultExtension: 'js' },
    };

    var ngPackageNames = [
      'common',
      'compiler',
      'core',
      'http',
      'platform-browser',
      'platform-browser-dynamic',
      'router',
      'router-deprecated',
      'testing',
      'upgrade',
    ];

    ngPackageNames.forEach(function (pkgName) {
        packages['@angular/' + pkgName] = { main: 'bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
    });

    var config = {
        map: map,
        packages: packages
    }

    System.config(config);

})(this);