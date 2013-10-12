/* global describe, it */
'use strict';

var log = require('../../log-notify');

describe('log-notify', function () {
    it('should should return a function', function () {
        log.should.be.a('function');
    });
});
