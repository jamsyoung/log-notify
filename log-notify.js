'use strict';

var debug = require('debug')('log-notify');

module.exports = (function log() {
    var notifier;

    switch (process.platform) {
    case 'darwin':
        debug('setting notifier to terminal-notifier');

        notifier = require('terminal-notifier');
        return function (message) {
            var cleanedMessage = typeof message.stripColors === 'string' ? message.stripColors : message;
            notifier(cleanedMessage, {
                title: 'Dust Compiler',
                activate: 'com.apple.Terminal'
            });
            console.log(message);
        };

    case 'linux':
    case 'win32':
        debug('setting notifier to growl');

        notifier = require('growl');
        return function (message) {
            var cleanedMessage = typeof message.stripColors === 'string' ? message.stripColors : message;
            notifier(cleanedMessage, { title: 'Dust Compiler' });
            console.log(message);
        };

    default:
        return console.log;
    }
}());
