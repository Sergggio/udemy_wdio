// var baseUrl;

// if(process.env.SERVER === 'prod') {
//     baseUrl = 'https://www.google.com';
//     } else {
//         baseUrl = 'http://www.webdriveruniversity.com'
//     }

//     var timeout = process.env.DEBUG ? 9999999 : 10000;


exports.config = {
    runner: 'local',
    path: '/',
    specs: [
        'test/*.js'
    ],
    //exclude: [
     //   'pageObjects/*_Page.js'
    //],

    maxInstances: 10,

    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome'
    }],

    sync: true,
    // Level of logging verbosity: silent | verbose | command | data | result | error
    logLevel: 'error',
    coloredLogs: true,
    deprecationWarnings: true,
    bail: 0,
    //screenshotPath: './errorShots/',
    baseUrl: 'http://www.webdriveruniversity.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    //services: ['selenium-standalone'],
    services: ['chromedriver'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
        compilers: ['js:@babel/register']
    },


    before: function (capabilities, specs) {
    	require('@babel/register');
        expect = require('chai').expect;
        //should = require('chai').should();

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
