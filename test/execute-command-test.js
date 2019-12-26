describe("Inject javascript into the target website", () => {
    beforeEach(function() {
      browser.setWindowSize(1800, 1200);
      browser.url("./");
    });

    it("Change webdriveruni background color", () => {
        browser.execute(() => {
            return (document.body.style.backgroundColor = "red");
        });
        browser.pause(5000);
    }); 
  });
  