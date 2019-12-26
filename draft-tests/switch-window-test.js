describe("Switch tabs", () => {
    beforeEach(function() {
      browser.setWindowSize(1800, 1200);
      browser.url("./");
    });
  
    it("Switch to contact us tab", () => {
      const clickById = $("#contact-us");
      clickById.click();

      console.log('HOMEPAGE HEADER:' + browser.getTitle())
      browser.pause(2000);

      browser.switchWindow('WebDriver | Contact Us')
      console.log('CONTACT US HEADER:' + browser.getTitle())
    });
  });
  