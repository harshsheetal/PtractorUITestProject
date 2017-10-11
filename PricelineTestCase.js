var EC = protractor.ExpectedConditions;

describe('Priceline', function(){

"use strict"
  it('First_test',function(done){
browser.get('https://www.priceline.com/');

/*beforeEach(function (done) {
window.jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
setTimeout(function () {
console.log('inside timeout');
done();
}, 5000);
})*/
element(by.xpath("//input[@placeholder='Where are you going?']")).sendKeys("New York");
browser.sleep(2000);
element(by.xpath("//input[@placeholder='Check-in']")).sendKeys("02/17/2018");
browser.sleep(2000);
element(by.xpath("//input[@placeholder='Check-in']")).sendKeys(protractor.Key.TAB);
element(by.xpath("//input[@placeholder='Check-out']")).sendKeys("02/18/2018");
browser.sleep(2000);
//browser.pause();
//element(by.xpath("//button[contains(@class,'primary green mobile-seti')]")).click();
/*var elem = element(by.xpath("//button[contains(.,'Search Hotels')]"));
browser.actions().mouseMove(elem).click().perform();*/
/*var search_btn= element(by.css("(//button[contains(@class,'green')])[1]"));
browser.wait(EC.visibilityOf(search_btn), 5000);
search_btn.click();*/

element(by.xpath("//button[@data-reactid='100']")).sendKeys(protractor.Key.TAB);
element(by.xpath("//button[@data-reactid='100']")).click();
//browser.wait(EC.urlContains('stay/search'), 20000);
browser.sleep(15000);
//element(by.xpath(".//*[@id='search-retail-listings']/div/div/div[1]/div[1]/div/div/div/div[1]/div[3]/div[2]/div[3]/div/a/div/p")).sendKeys(protractor.Key.TAB);
element(by.xpath(".//*[@id='search-retail-listings']/div/div/div[1]/div[1]/div/div/div/div[1]/div[3]/div[2]/div[3]/div/a/div/p")).click();
browser.sleep(10000);

browser.getAllWindowHandles().then(function(handles) {
      browser.switchTo().window(handles[1]);
      browser.sleep(10000);
})

element(by.xpath(".//*[@id='details-rate-selector']/div/div[5]/div[2]/div[2]/div/div/table/tbody/tr/td[2]/div/div/div[3]/button")).sendKeys(protractor.Key.TAB);
browser.sleep(3000);
element(by.xpath(".//*[@id='details-rate-selector']/div/div[5]/div[2]/div[2]/div/div/table/tbody/tr/td[2]/div/div/div[3]/button")).click();
//browser.pause();
//browser.wait(EC.urlContains('checkout'), 5000);
browser.sleep(15000);

/*var gd= element(by.xpath("//span[contains(.,'Guest Details')]"));
gd.getText().then(function(text){
  console.log(text);
  expect(text).toEqual('Guest Details');
})*/
element(by.xpath("//input[@id='firstName']")).sendKeys(protractor.Key.TAB);
element(by.xpath("//input[@id='firstName']")).sendKeys("Harsh");
element(by.xpath("//input[@id='lastName']")).sendKeys("Singh");
element(by.xpath("//input[@id='firstNameBilling']")).sendKeys("Harry");
element(by.xpath("//input[@id='lastNameBilling']")).sendKeys("Potter");
element(by.xpath("//input[@id='address']")).sendKeys("123 street");
element(by.xpath("//input[@id='city']")).sendKeys("Norwalk");
element(by.cssContainingText('option','Arizona')).click();
element(by.xpath("//input[@id='zipcode']")).sendKeys("28262");
element(by.xpath("//input[@id='telephone1']")).sendKeys("0987654321");
element(by.xpath("//input[@id='email-address']")).sendKeys("harshdeep.sheetal@priceline.com");
element(by.xpath("//input[@id='email-address-retype']")).sendKeys("harshdeep.sheetal@priceline.com");
element(by.xpath("//input[@id='cc-number']")).sendKeys("5454545454545454");
element(by.cssContainingText('option','10')).click();
element(by.cssContainingText('option','2020')).click();
element(by.xpath("//input[@id='cc-securitycode']")).sendKeys("121");
element(by.xpath("//input[@id='book-button']")).click();

browser.sleep(15000);



//browser.wait(EC.urlContains('checkout'), 5000);

done();
  })
  browser.sleep(5000);

})

afterAll(function(done){
    process.nextTick(done);
});
