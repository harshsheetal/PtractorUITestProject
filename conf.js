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
 defaultTimeoutInterval: 2500000
},


  //seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['PricelineTestCase.js']
};
