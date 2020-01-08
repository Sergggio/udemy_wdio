const config = require('./config/main-config');

exports.config = {
    runner: 'local',
    path: '/',
    specs: [
        './test/**/*.js'
    ],
    suites: {
        contactus: [
            "./test/contact-us-test.js"
        ],
        regression: [
            "./test/checkbox-test.js",
            "./test/homepage-test.js",
            "./test/switch-window-test.js"
        ]
    },
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 1,
    capabilities: [{
        maxInstances: 5,
        browserName: config.browser,
    }],
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: config.logLevel,
    bail: 0,
     baseUrl: config.baseUrl,
    waitforTimeout: config.timeout,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'mocha',
    specFileRetries: 3,
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
        compilers: ['js:@babel/register']
    },
    before: function (capabilities, specs) {
        require('@babel/register');
        expect = require('chai').expect;

        browser.addCommand("getUrlAndTitle", function () {
            // `this` refers to the `browser` scope
            return {
                url: this.getUrl(),
                title: this.getTitle()
            };
        });

        browser.addCommand("waitAndClick", function (selector) {
            try {
                $(selector).waitForExist();
                $(selector).click(); 
            } catch(Error) {
                throw new Error("Could not click on selector: " + $(selector));
            }
        });

        browser.addCommand("waitAndSendkeys", function (selector, keys) {
            try {
                $(selector).waitForExist();
                $(selector).setValue(keys);
            } catch(Error) {
                throw new Error("Could not send keys: " + $(keys) + ", using selector: " + $(selector));
            }
        });
    },
}
