# log-notify
This is a small library that combines [growl][growl] and
[terminal-notifier][terminal-notifier] into a single call that can be used
to quickly add notifications to an appliction with support for OS X, Windows
and Linux.  For systems that do not support the OS X Notification Center or
Growl, the notification will go to `console.log()`.

[![Build Status](https://travis-ci.org/jamsyoung/log-notify.png)](https://travis-ci.org/jamsyoung/log-notify)
[![NPM version](https://badge.fury.io/js/log-notify.png)](http://badge.fury.io/js/log-notify)
[![Dependency Status](https://gemnasium.com/jamsyoung/log-notify.png)](https://gemnasium.com/jamsyoung/log-notify)
[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/jamsyoung/log-notify/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

## How to add to your application

```
var log = require('log-notify');

log('Hello World!');
```

If you want to see it in action, just run the included `demo-app.js`.

```
node demo-app.js
```




[growl]: https://npmjs.org/package/growl
[terminal-notifier]: https://npmjs.org/package/terminal-notifier
