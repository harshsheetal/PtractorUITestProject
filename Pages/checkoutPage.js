var checkoutPage= function()
{
  this.firstName= element(by.xpath("//input[@id='firstName']"));
  this.lastName= element(by.xpath("//input[@id='lastName']"));
  this.firstNameBilling= element(by.xpath("//input[@id='firstNameBilling']"));
  this.lastNameBilling= element(by.xpath("//input[@id='lastNameBilling']"));
  this.address=element(by.xpath("//input[@id='address']"));
  this.city=element(by.xpath("//input[@id='city']"));
  this.zipcode=element(by.xpath("//input[@id='zipcode']"));
  this.telephone=element(by.xpath("//input[@id='telephone1']"));
  this.emailAddress=element(by.xpath("//input[@id='email-address']"));
  this.emailAddressRetype=element(by.xpath("//input[@id='email-address-retype']"));
  this.ccNumber=element(by.xpath("//input[@id='cc-number']"));
  this.ccSecurityCode=element(by.xpath("//input[@id='cc-securitycode']"));
  this.bookBtn=element(by.xpath("//input[@id='book-button']"));
}

module.exports= new checkoutPage();
