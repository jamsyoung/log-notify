/* global describe, it */
'use strict';

var log = require('../../log-notify');

// I haven't found a good way to actually confrim that the notification was
// displayed properly on the target OS.

describe('log-notify', function () {
    it('should return a function', function () {
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
