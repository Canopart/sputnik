'use strict';

var request = require('request');
var querystring = require('querystring');

var url;
var guid;
var version;

function hit(payload) {
    request.post({
        headers: {'content-type' : 'application/x-www-form-urlencoded'},
        url:     url,
        body:    querystring.stringify(payload)
    }).on('error', function (err) {
        // nothing
    });
}

exports.init = function (analyticsUrl, appGuid, appVersion) {
    url = analyticsUrl;
    guid = appGuid;
    version = appVersion;
};

exports.dailyHit = function () {
    var a = {};
    a.guid = guid;
    a.version = version;
    a.type = 'dailyHit';
    hit(a);
};

exports.monthlyReaport = function (a) {
    a.guid = guid;
    a.version = version;
    a.type = 'monthlyReaport';
    hit(a);
};