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
        cy.addProdutos('Abominable Hoodie', 'S', 'Blue', 3)


    });

    it.only('Deve adicionar o 2° produto no carrinho', () => {

        cy.addProdutos('Abominable Hoodie', 'M', 'Blue', 3)
    });

    it('Deve adicionar o 3° produto no carrinho ', () => {
        let quantidade = 2

        cy.addProduto2('Autumn Pullie', 'L', 'Red', '2')
        cy.get('.woocommerce-message').should('contain', quantidade)
    });

    it('Deve adicionar o 4° produto no carrinho', () => {
        let quantidade = 1
        cy.addProduto2('Caesar Warm-Up Pant', '33', 'Black', '1')
        cy.get('.woocommerce-message').should('contain', quantidade)
    });


    it('Deve preencher com sucesso o checkout ', () => {
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

    });
})