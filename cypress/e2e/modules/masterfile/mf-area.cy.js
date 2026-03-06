describe('template spec', () => {
  it('CHECK LOGIN CREDS', () => {
    cy.visit('https://hr.lstvqatest.online/login_view.php')

    cy.get('[name="gl_comcde"]').click().clear().type("QATEAM")
    cy.get('[name="txtusrcde"]').click().type("ADRIAN")
    cy.get('[name="txtusrpwd"]').click().type("Ess@1234")
    cy.get('.loginbtn > input').click()

   cy.get('.ajs-dialog').should("be.visible")
   cy.get('.ajs-button').click()

   cy.url().should('include', 'login_applist.php')

   //clicking HRIS MODULE
   cy.get(':nth-child(4) > .applist_gradient').click()

   //clicking menu button 
  cy.url().should('include', 'main.php')
  cy.get('#toggle').click()

   //clicking CODE DEFINITION
  cy.get('#\\33 89').click()


  //clicking AREA MASTERFILE  
  cy.contains("Area").click()

  //validating Area Masterfile 
  cy.url().should('include', 'mf_area.php')
  cy.get('#lbl_title').should("have.text", "Area File")


  //ADDING DATA 
  cy.get('#pager_default_add').click()
  cy.get('[aria-describedby="pager_modal"]').should("be.visible")
  cy.get('[name="modalField[aredsc]"]').click().type("EDITH MARIE")
  cy.get('#btn_diag_save').click()
  
  cy.get('#btn_diag_save').should("be.visible")
  cy.get('.ajs-button').click()

cy.get('#aredsc').should("have.text", "EDITH MARIE")



  })
})