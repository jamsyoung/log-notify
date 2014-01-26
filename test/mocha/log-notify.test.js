/* global describe, it */
'use strict';

// I haven't found a good way to actually confirm that the notification was
// displayed properly on the target OS, so when these tests are run you need
// to visually see if all 4 notifications come up.

describe('log-notify', function () {

    describe('log-notify itself', function () {
        var log = require('../../log-notify')();

        it('should return a function', function () {
            log.should.be.a('function');
        });
    });


    describe('log-notify alerts with no title', function () {
        var log = require('../../log-notify')();

        // I get inconsistent results when all of these tests hit notification center
        // on OS X in rapid fire.  Need to put in a 1 second delay after each test.
        afterEach(function (done) {
            setTimeout(function () {
                done();
            }, 1000 * 1);
        });

        it('should work with a basic string', function () {
            // this isn't a 'true' test since grunt itself installs 'color', which provides
            // the 'stripColors' method on a string object that log-notify tests for.
            log('basic string with no title');
        });

        it('should work with a string with color', function () {
            // Colors should be stripped off before being sent to the notifier
            // If they are not, a lot of trash will show in the notification window
            log('colored string with no title'.rainbow);
        });
    });


    describe('log-notify alerts with a custom title', function () {
        var log = require('../../log-notify')('Custom Title');

        afterEach(function (done) {
            setTimeout(function () {
                done();
            }, 1000 * 1);
        });

        it('should work with a basic string', function () {
            log('basic string with custom title');
        });

        it('should work with a string with color', function () {
            // Colors should be stripped off before being sent to the notifier
            // If they are not, a lot of trash will show in the notification window
            log('colored string with custom title'.rainbow);
        });
    });
});
