// var baseUrl;

// if(process.env.SERVER === 'prod') {
//     baseUrl = 'https://www.google.com';
//     } else {
//         baseUrl = 'http://www.webdriveruniversity.com'
//     }

//     var timeout = process.env.DEBUG ? 9999999 : 10000;


exports.config = {
    runner: 'local',
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
    services: ['selenium-standalone'],
    //services: ['chromedriver'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
        compilers: ['js:@babel/register']
    },

    before: function (capabilities, specs) {
    	require('@babel/register');
        //expect = require('chai').expect;
        //should = require('chai').should();
    },
 }
