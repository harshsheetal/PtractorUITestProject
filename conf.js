exports.config = {
 directConnection: true,


capabilities: {
  'browserName' : 'chrome'
},



framework: 'jasmine',


  //seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['user_AbleToValidateDestinationInputBox.js']
};
