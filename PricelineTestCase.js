var EC = protractor.ExpectedConditions;

describe('Priceline', function(){

"use strict"
  it('First_test',function(done){
browser.get('https://www.priceline.com/');

element(by.xpath("//input[@placeholder='Destination']")).sendKeys("New York");
browser.sleep(2000);
element(by.xpath("//input[@placeholder='Check-in']")).sendKeys("02/14/2018");
browser.sleep(2000);
element(by.xpath("//input[@placeholder='Check-in']")).sendKeys(protractor.Key.TAB);
element(by.xpath("//input[@placeholder='Check-out']")).sendKeys("02/15/2018");
browser.sleep(2000);
//browser.pause();
//element(by.xpath("//button[contains(@class,'primary green mobile-seti')]")).click();
/*var elem = element(by.xpath("//button[contains(.,'Search Hotels')]"));
browser.actions().mouseMove(elem).click().perform();*/
/*var search_btn= element(by.css("(//button[contains(@class,'green')])[1]"));
browser.wait(EC.visibilityOf(search_btn), 5000);
search_btn.click();*/

element(by.css('.hotel-retail-search-form .primary.green')).sendKeys(protractor.Key.TAB);
element(by.css('.hotel-retail-search-form .primary.green')).click();
//browser.wait(EC.urlContains('stay/search'), 10000);
browser.sleep(10000);

//element(by.xpath(".//*[@id='search-retail-listings']/div/div/div[1]/div[1]/div/div/div/div[1]/div[3]/div[2]/div[2]/div/a/div/p")).sendKeys(protractor.Key.TAB);
element(by.xpath(".//*[@id='search-retail-listings']/div/div/div[1]/div[1]/div/div/div/div[1]/div[3]/div[2]/div[2]/div/a/div/p")).click();
browser.sleep(10000);

browser.getAllWindowHandles().then(function(handles) {
      browser.switchTo().window(handles[1]);
      browser.sleep(10000);
})

element(by.xpath(".//*[@id='details-rate-selector']/div/div[5]/div[2]/div[2]/div/div/table/tbody/tr/td[2]/div/div/div[3]/button")).sendKeys(protractor.Key.TAB);
element(by.xpath(".//*[@id='details-rate-selector']/div/div[5]/div[2]/div[2]/div/div/table/tbody/tr/td[2]/div/div/div[3]/button")).click();
//browser.pause();
//browser.wait(EC.urlContains('checkout'), 5000);
browser.sleep(15000);

//browser.wait(EC.urlContains('checkout'), 5000);

done();
  })

})
afterAll(function(done){
    process.nextTick(done);
});
