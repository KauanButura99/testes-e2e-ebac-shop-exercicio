/// <reference types="cypress" />
import checkout from "../support/page_objects/checkout";
const dadosEndereço = require("../fixtures/endereço.json")

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('minha-conta/')
        cy.login('josegabriel@gmail.com', '12345')

    });


    it('Deve adicionar um produto no carrinho - Usando comando customizados ', () => {
        let carrinho = 8

        cy.addProdutos('produtos/', 'Abominable Hoodie', 'S', 'Blue', '3')
        cy.addProdutos('produtos/page/2/', 'Bruno Compete Hoodie', 'M', 'Blue', '3')
        cy.addProdutos('produtos/page/2/', 'Caesar Warm-Up Pant', '33', 'Black', '1')
        cy.addProdutos('produtos/page/2/', 'Cassia Funnel Sweatshirt', 'S', 'Orange', '1')
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', carrinho)

        checkout.editarEndereço(
            dadosEndereço[0].nome,
            dadosEndereço[0].sobrenome,
            dadosEndereço[0].empresa,
            dadosEndereço[0].pais,
            dadosEndereço[0].endereço,
            dadosEndereço[0].cidade,
            dadosEndereço[0].estado,
            dadosEndereço[0].cep,
            dadosEndereço[0].telefone,
            dadosEndereço[0].email
        )
        cy.formaDePagamento('cheque')

        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido')
    });
});

