var listingsPage = function()
{
  this.listingsBookHotelBtn=element(by.xpath(".//*[@id='search-retail-listings']/div/div/div[1]/div[1]/div/div/div/div[1]/div[3]/div[2]/div[3]/div/a/div/p"));

this.clickOnListingsBookHotelBtn = function()
{
  this.listingsBookHotelBtn.click();
}

}

module.exports = new listingsPage();
