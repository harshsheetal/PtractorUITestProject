var EC = protractor.ExpectedConditions;
var homePage = require ('../Pages/homePage.js');
var listingsPage = require('../Pages/listingsPage.js');
var detailsPage= require('../Pages/detailsPage.js');
var checkoutPage= require('../Pages/checkoutPage.js');
describe('Hotels Priceline', function(){

"use strict"
it('endToEndTest', function(done){

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
  //browser.pause();
  browser.sleep(15000);
  //listingsPage.listingsBookHotelBtn.sendKeys(protractor.Key.TAB);
  listingsPage.clickOnListingsBookHotelBtn();
  browser.sleep(10000);

  browser.getAllWindowHandles().then(function(handles) {
        browser.switchTo().window(handles[3]);
        browser.sleep(10000);
  })

  detailsPage.detailsBookHotelBtn.sendKeys(protractor.Key.TAB);
  detailsPage.clickOnDetailsBookHotelBtn();
  browser.sleep(10000);

  checkoutPage.firstName.sendKeys(protractor.Key.TAB);
  checkoutPage.firstName.sendKeys("Harsh");
  checkoutPage.lastName.sendKeys("Singh");
  checkoutPage.firstNameBilling.sendKeys("Harry");
  checkoutPage.lastNameBilling.sendKeys("Potter");
  checkoutPage.address.sendKeys("123 street");
  checkoutPage.city.sendKeys("Norwalk");
  element(by.cssContainingText('option','Arizona')).click();
  checkoutPage.zipcode.sendKeys("28262");
  checkoutPage.telephone.sendKeys("0987654321");
  checkoutPage.emailAddress.sendKeys("harshdeep.sheetal@priceline.com");
  checkoutPage.emailAddressRetype.sendKeys("harshdeep.sheetal@priceline.com");
  checkoutPage.ccNumber.sendKeys("5454545454545454");
  element(by.cssContainingText('option','10')).click();
  element(by.cssContainingText('option','2020')).click();
  checkoutPage.ccSecurityCode.sendKeys("121");

  //element(by.xpath("//input[@id='book-button']")).click();

  browser.sleep(15000);


done();
})
})
afterAll(function(done){
    process.nextTick(done);
});
