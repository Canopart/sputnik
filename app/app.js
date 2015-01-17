import coreModule from './core/core';
import readModule from './read/read';
import addFeedModule from './add_feed/add_feed';
import organizerModule from './organizer/organizer';
import importExportModule from './import_export/import_export';
import settingsModule from './settings/settings';
import aboutModule from './about/about';

angular.module('sputnik', [
    coreModule.name,
    readModule.name,
    addFeedModule.name,
    organizerModule.name,
    importExportModule.name,
    settingsModule.name,
    aboutModule.name,
    'ngRoute',
    'ngSanitize',
    'ngAnimate',
])
.config(function ($routeProvider) {
    $routeProvider
    .when('/add-feed', addFeedModule.view);
});

angular.bootstrap(document.documentElement, ['sputnik']);
