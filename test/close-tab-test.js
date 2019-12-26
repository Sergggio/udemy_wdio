describe("Close tabs", () => {
    beforeEach(function() {
      browser.setWindowSize(1800, 1200);
      browser.url("./");
    });
  
    it("Close contact us tab", () => {
      const clickById = $("#contact-us");
      clickById.click();

      console.log('HOMEPAGE HEADER:' + browser.getTitle())
      browser.pause(2000);

      browser.switchWindow('WebDriver | Contact Us')
      console.log('CONTACT US HEADER:' + browser.getTitle())
      browser.closeWindow()
      browser.pause(2000);
    });
  });
  