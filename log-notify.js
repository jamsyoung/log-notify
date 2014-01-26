'use strict';

var debug = require('debug')('log-notify');

function log(title) {
    var notifier;

    title = (title === undefined) ? '' : title;

    switch (process.platform) {
    case 'darwin':
        debug('setting notifier to terminal-notifier');

        notifier = require('terminal-notifier');

        return function logTerminalNotifier(message) {
            var cleanedMessage = typeof message.stripColors === 'string' ? message.stripColors : message;
            notifier(cleanedMessage, {
                title: title,
                activate: 'com.apple.Terminal'
            });
            console.log(message);
        };

    case 'linux':
    case 'win32':
        debug('setting notifier to growl');

        notifier = require('growl');

        return function logGrowl(message) {
            var cleanedMessage = typeof message.stripColors === 'string' ? message.stripColors : message;
            notifier(cleanedMessage, { title: title });
            console.log(message);
        };

    default:
        return console.log;
    }
}

module.exports = log;

