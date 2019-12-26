describe("Test contact us page on webdriveruni", () => {
    beforeEach(function() {
      browser.setWindowSize(1800, 1200);
      browser.url("./");

      const pageDetails = browser.getUrlAndTitle();
      expect(pageDetails.url).to.contain('webdriveruniversity');
      expect(pageDetails.title).to.contain('WebDriverUniversity');
    });

    it("Submit all information via the contact us page", () => {
        const contactUsButton = $('//h1[text()="CONTACT US"]/..');
        contactUsButton.click();

        browser.switchWindow('WebDriver | Contact Us');
        const firstName = $('//*[@name="first_name"]');
        const lastName = $('//*[@name="last_name"]');
        const emailAddress = $('//*[@name="email"]');
        const message = $('//*[@name="message"]');
        const submitButton = $('//*[@value="SUBMIT"]');

        firstName.setValue('Joe');
        lastName.setValue('Blogs');
        emailAddress.setValue('joe_Blogs121@mail.com');
        message.setValue('Hello how are you?');
        submitButton.click();

        const contactUsSubmissionDetails = browser.getUrlAndTitle();
        expect(contactUsSubmissionDetails.url).to.contain('contact-form-thank-you');
    }); 
  });