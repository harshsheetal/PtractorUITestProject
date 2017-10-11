var homePage = function()
{
  this.searchLocation= element(by.xpath("//input[@placeholder='Where are you going?']"));
  this.checkInDate= element(by.xpath("//input[@placeholder='Check-in']"));
  this.checkOutDate= element(by.xpath("//input[@placeholder='Check-out']"));
  this.findDealBtn= element(by.xpath("//button[@data-reactid='100']"));

 this.clickOnFindDealBtn = function()
 {
   this.findDealBtn.click();
 }
}

module.exports= new homePage();
