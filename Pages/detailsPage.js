var detailsPage= function()
{
this.detailsBookHotelBtn= element(by.xpath(".//*[@id='details-rate-selector']/div/div[5]/div[2]/div[2]/div/div/table/tbody/tr/td[2]/div/div/div[3]/button"));

this.clickOnDetailsBookHotelBtn= function()
{
  this.detailsBookHotelBtn.click();
}

}

module.exports= new detailsPage();
