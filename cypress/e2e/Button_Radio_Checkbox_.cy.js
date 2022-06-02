// Button_Radio_Checkbox_.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

import "cypress-iframe";
import "cypress-xpath";

describe("Topic 09 Exercise", () => {
  it("TC_01_Button", () => {
    cy.visit("https://www.fahasa.com/customer/account/create");
    cy.handleIframe(
      "iframe#preview-notification-frame.st_preview_frame_modal",
      "#NC_IMAGE1"
    );
    cy.get(".popup-login-tab-login").click;
    cy.get("li.popup-login-tab-login").click();
    cy.get("#login_username").type("chidl@unstatic.co");
    cy.get("#login_password").type("12345678");
    const btnLogin = "button.fhs-btn-login";
    cy.get(btnLogin)
      // .should('be.enabled')
      .should("have.css", "background-color", "rgb(201, 33, 39)");
  });

  it("TC_02_Default_Checkbox_Radio_Button", () => {
    cy.visit("https://demos.telerik.com/kendo-ui/checkbox/index");
    cy.xpath(
      "//label[text()='Dual-zone air conditioning']/preceding-sibling::input"
    )
      .click()
      .should("be.checked");
      cy.xpath(
        "//label[text()='Dual-zone air conditioning']/preceding-sibling::input"
      )
        .click()
        .should("not.be.checked");
    
    cy.visit("https://demos.telerik.com/kendo-ui/radiobutton/index");
    if (cy.xpath("//label[text()='2.0 Petrol, 147kW']/preceding-sibling::input").should('not.be.checked')) {
        cy.xpath("//label[text()='2.0 Petrol, 147kW']/preceding-sibling::input").click();
    }
    
  });

});
