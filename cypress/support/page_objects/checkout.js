class CheckoutPage {

  editarEndereço(nome, sobrenome, empresa, pais, endereço, cidade, estado, cep, tel, email) {
    cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
    cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout')
      .click()

    cy.get('#billing_first_name').clear().type(nome)
    cy.get('#billing_last_name').clear().type(sobrenome)
    cy.get('#billing_company').clear().type(empresa)
    cy.get('#select2-billing_country-container').click().type(pais).get('[aria-selected="true"]').click()
    cy.get('#billing_address_1').clear().type(endereço)
    cy.get('#billing_city').clear().type(cidade)
    cy.get('#select2-billing_state-container').click().type(estado).get('[aria-selected="true"]').click()
    cy.get('#billing_postcode').clear().type(cep)
    cy.get('#billing_phone').clear().type(tel)
    cy.get('#billing_email').clear().type(email)






  }

}

export default new CheckoutPage()