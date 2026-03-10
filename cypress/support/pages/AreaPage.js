export const AreaPage ={

    validatePage(){
    cy.url().should('include', 'mf_area.php')
    cy.get('#lbl_title').should("have.text", "Area File")
    },

    validData(){
  cy.get('#pager_default_add').click()
  cy.get('[aria-describedby="pager_modal"]').should("be.visible")
  cy.get('[name="modalField[aredsc]"]').click().type("EDITH MARIE")
  cy.get('#btn_diag_save').should("be.visible").click()

    },

    validateData(){
  cy.get('.ajs-button').click()
  cy.get('#aredsc').should("have.text", "EDITH MARIE")


    }
 

}
 
