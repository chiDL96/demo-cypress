// Button_Radio_Checkbox_.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

import "cypress-iframe";
import "cypress-xpath";

describe("Topic 09 Exercise", () => {
  // it("TC_01_Button", () => {
  //   cy.visit("https://www.fahasa.com/customer/account/create");
  //   cy.handleIframe(
  //     "iframe#preview-notification-frame.st_preview_frame_modal",
  //     "#NC_IMAGE1"
  //   );
  //   cy.get(".popup-login-tab-login").click;
  //   cy.get("li.popup-login-tab-login").click();
  //   cy.get("#login_username").type("chidl@unstatic.co");
  //   cy.get("#login_password").type("12345678");
  //   const btnLogin = "button.fhs-btn-login";
  //   cy.get(btnLogin)
  //     // .should('be.enabled')
  //     .should("have.css", "background-color", "rgb(201, 33, 39)");
  // });

  // it("TC_02_Default_Checkbox_Radio_Button", () => {
  //   cy.visit("https://demos.telerik.com/kendo-ui/checkbox/index");
  //   cy.xpath(
  //     "//label[text()='Dual-zone air conditioning']/preceding-sibling::input"
  //   )
  //     .click()
  //     .should("be.checked");
  //   cy.xpath(
  //     "//label[text()='Dual-zone air conditioning']/preceding-sibling::input"
  //   )
  //     .click()
  //     .should("not.be.checked");

  //   cy.visit("https://demos.telerik.com/kendo-ui/radiobutton/index");
  //   if (
  //     cy
  //       .xpath("//label[text()='2.0 Petrol, 147kW']/preceding-sibling::input")
  //       .should("not.be.checked")
  //   ) {
  //     cy.xpath(
  //       "//label[text()='2.0 Petrol, 147kW']/preceding-sibling::input"
  //     ).click();
  //   }
  // });

  // it("TC_03_Custom_Radio_Checkbox_p1", () => {
  //   cy.visit("https://material.angular.io/components/checkbox/examples");
  //   cy.xpath("//span[text()='Checked']//preceding::input").click({
  //     force: true,
  //   });
  // });

  // it("TC_04_Custom_Radio_Checkbox_p2", () => {
  //   cy.visit(
  //     "https://docs.google.com/forms/d/e/1FAIpQLSfiypnd69zhuDkjKgqvpID9kwO29UCzeCVrGGtbNPZXQok0jA/viewform"
  //   );
  //   cy.xpath("//div[@aria-label='Mì Quảng']")
  //     .click()
  //     .should("have.attr", "aria-checked", "true");
  // });

  // it('TC_05', () => {
  //   cy.visit("https://register.rediff.com/register/register.php");
  //   cy.xpath("//input[@id='Register']").click();
  //   cy.on('window:alert',(t)=>{
  //     //assertions
  //     expect(t).to.contains('Your full name');
  //  })
  // });

  it('User interaction: Hover to element', () => {
    cy.visit("https://www.fahasa.com/");
    cy.handleIframe(
      "iframe#preview-notification-frame.st_preview_frame_modal",
      "#NC_IMAGE1"
    );
    cy.xpath("//span[@class='icon_menu']").trigger("mouseover");
    cy.wait(2000);
    cy.xpath("//span[text()='Đồ Chơi']").trigger("mouseover");
    cy.wait(2000);
    cy.xpath("//div[@class='fhs_column_stretch']//a[text()='Đồ Chơi Điều Khiển']").click();
  });

});
