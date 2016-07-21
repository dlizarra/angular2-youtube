// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map:any = {};

/** User packages configuration. */
const packages:any = {
    'moment': {
        format: 'cjs'
    },
    'ng2-pagination': {
        format: 'register'
    }
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels:string[] = [
    // Angular specific barrels.
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/forms',
    '@angular/http',
    '@angular/router',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',

    // Thirdparty barrels.
    'rxjs',

    // App specific barrels.
    'app',
    'app/shared',
    'app/shared/nav',
    'app/shared/nav/header',
    'app/shared/nav/search-box',
    'app/search-box',
    'app/videos',
    'app/videos/video-detail',
    'app/videos/video-list',
    'app/videos/video-list-item',
    'app/videos/shared'
    /** @cli-barrel */
];

const cliSystemConfigPackages:any = {};
barrels.forEach((barrelName:string) => {
    cliSystemConfigPackages[barrelName] = {main: 'index'};
});

/** Type declaration for ambient System. */
declare var System:any;

// Apply the CLI SystemJS configuration.
System.config({
    map: {
        '@angular': 'vendor/@angular',
        'rxjs': 'vendor/rxjs',
        'main': 'main.js',
        'moment': 'vendor/moment/moment.js',
        'ng2-pagination': 'vendor/ng2-pagination/dist/ng2-pagination-bundle.js'
    },
    packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({map, packages});
