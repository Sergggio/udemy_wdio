describe("Chai assertions", () => {
    beforeEach(function() {
      browser.setWindowSize(1800, 1200);
      browser.url("./");
    });
  
    it("Test webdriveruni login portal", () => {
      const clickById = $("#login-portal");
      clickById.click();

      browser.switchWindow('WebDriver | Login Portal')

      const loginPageTitle = browser.getTitle();
      const loginUrl = browser.getUrl();

      expect(loginPageTitle).to.contains('Login Portal');
      expect(loginUrl).to.contains('Login-Portal');
    });
  });
  