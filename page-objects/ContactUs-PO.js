import Base_PO from './Base_PO'
var config = require('../config/main-config')
var dataGenerators = require('../utils/dataGenerators')

class ContactUs_PO extends Base_PO {
    open() {
        super.open("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    }

    get firstName() {
        return $('//*[@name="first_name"]');
    }

    get lastName() {
        return $('//*[@name="last_name"]');
    }

    get emailAddress() {
        return $('//*[@name="email"]');
    }

    get comments() {
        return $('//*[@name="message"]');
    }

    get submitButton() {
        return $('//*[@value="SUBMIT"]');
    }

    submit() {
        this.submitButton.click();
    }

    get successfulContactHeader() {
        return $("//div[@id='contact_reply']/h1");
    }

    successfulContactUsSubmission() {
        this.firstName.waitForDisplayed(5000);
        this.firstName.setValue(config.firstName);
        this.lastName.setValue(config.lastName);
        this.emailAddress.setValue(dataGenerators.generateRandomEmailAddress());
        this.comments.setValue(dataGenerators.generateRandomString());
        this.submit();
        expect(this.successfulContactHeader.getText()).to.contain('Thank You for your Message!');
    }

}
export default new ContactUs_PO()