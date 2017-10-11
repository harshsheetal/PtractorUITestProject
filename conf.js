exports.config = {
 directConnection: true,


capabilities: {
  'browserName' : 'chrome'
},

framework: 'jasmine',



onPrepare: function(){
  browser.ignoreSynchronization=true;
  browser.driver.manage().window().setSize(1280, 1024);

  var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
  jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
        savePath: './e2e-reports/',
        takeScreenshots: true,
      }));
},
jasmineNodeOpts: {
  isVerbose: true,
  showColors: true,
  showTiming: true,
  realtimeFailure: true,
  stackTrace: false,
 defaultTimeoutInterval: 250000
},


suites : {
  functionalTest:[
    'Specs/User able to Naviagte To Listings Page.spec.js'
  ],
}
  //specs: ['PricelineTestCase.js']
};
