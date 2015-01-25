import coreModule from './core/core';
import readModule from './read/read';
import addFeedModule from './add_feed/add_feed';
import organizeModule from './organize/organize';
import settingsModule from './settings/settings';
import aboutModule from './about/about';

angular.module('sputnik', [
    coreModule.name,
    readModule.name,
    addFeedModule.name,
    organizeModule.name,
    settingsModule.name,
    aboutModule.name,
    'ngRoute',
    'ngSanitize',
    'ngAnimate',
])
.config(function ($routeProvider) {
    $routeProvider
    .when('/add-feed', addFeedModule.view)
    .when('/organize', organizeModule.view)
    .when('/about', aboutModule.view)
    .when('/settings', settingsModule.view);
});

angular.bootstrap(document.documentElement, ['sputnik']);
