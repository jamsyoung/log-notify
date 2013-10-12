/* global describe, it */
'use strict';

var log = require('../../log-notify');

describe('log-notify', function () {
    it('should should return a function', function () {
        log.should.be.a('function');
    });

    it('should work with a basic string', function () {
        // this isn't a 'true' test since grunt itself installs 'color', which provides
        // the 'stripColors' method on a string object that log-notify tests for.
        log('hello world');
    });

    it('should work with a string with color', function () {
        // This means it can successfully strip off the colors before sending to the notifier
        log('hello world with color'.rainbow);
    });
});
