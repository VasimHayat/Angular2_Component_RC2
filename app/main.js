"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_Component_1 = require('./app.Component');
platform_browser_dynamic_1.bootstrap(app_Component_1.AppComponent)
    .then(function (success) { return console.log("Bootstrap success"); })
    .catch(function (error) { return console.log(error); });
//# sourceMappingURL=main.js.map