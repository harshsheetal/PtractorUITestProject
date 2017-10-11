var EC = protractor.ExpectedConditions;
var homePage = require ('../Pages/homePage');
describe('Hotels Priceline', function(){

"use strict"
it('userAbleToNavigateToListingsPage', function(done){

  browser.get('https://www.priceline.com/');

  homePage.searchLocation.sendKeys("New York");
  homePage.checkInDate.sendKeys("04/17/2018");
  homePage.checkOutDate.sendKeys(protractor.Key.TAB);
  homePage.checkOutDate.sendKeys("04/18/2018");
  homePage.findDealBtn.sendKeys(protractor.Key.TAB);
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
