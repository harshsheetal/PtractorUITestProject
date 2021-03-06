var EC = protractor.ExpectedConditions;
var homePage = require ('../Pages/homePage.js');
describe('Hotels Priceline', function(){

"use strict"
it('userAbleToNavigateToListingsPage', function(done){

  browser.get('https://www.priceline.com/');

  homePage.searchLocation.sendKeys("New York");
  browser.sleep(1000);
  homePage.checkInDate.sendKeys("02/17/2018");
  browser.sleep(1000);
  homePage.checkOutDate.sendKeys(protractor.Key.TAB);
  homePage.checkOutDate.sendKeys("02/18/2018");
  browser.sleep(2000);
  homePage.findDealBtn.sendKeys(protractor.Key.TAB);
  browser.sleep(2000);
  homePage.clickOnFindDealBtn();
  browser.sleep(10000);
  browser.wait(EC.urlContains('stay/search'), 10000);
  browser.sleep(5000);

done();
})
})
afterAll(function(done){
    process.nextTick(done);
});
