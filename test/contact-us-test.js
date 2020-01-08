import ContactUs_PO from '../page-objects/ContactUs_PO';

describe("Test contact us page on webdriveruni", () => {
    beforeEach(function() {
      ContactUs_PO.open();
    });

    it("Submit all information via the contact us page", () => {
      ContactUs_PO.successfulContactUsSubmission();
    }); 
  });