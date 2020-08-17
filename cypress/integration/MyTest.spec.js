describe('Meu primeiro teste', () => {

    beforeEach(() => cy.visit("https://www.google.com.br/?gws_rd=ssl"));
        
    it('Acessar o Google', () => {
        cy.url().should('include','https://www.google.com.br/?gws_rd=ssl');
    })

    it('Validar Botão Pesquisa Google Existe', () =>{
        cy.get('.FPdoLc > center > .gNO89b').should('exist');
    })

    it('Validar Botão Estou com Sorte Existe', () => {
        cy.get('.FPdoLc > center > .RNmpXc').should('exist');
    })

    it('Validar Link Gmail Exist', () => {
        cy.get(':nth-child(1) > .gb_g').should('exist');
    })
})

describe('Teste PHP Travels', () => {
    beforeEach(() => cy.visit('https://phptravels.com/demo/'));

    it.only('Validar se acessou página inicial', () => {
        cy.get('.upper').should('contain','Application Test Drive');
        cy.contains('Application Test Drive');
        cy.get('p.wow').should('contain','Free updates lifetime and upgrades 1 year');
        cy.get('.row > :nth-child(1) > .btn').should('exist');
        cy.get('.row > :nth-child(2) > .btn').should('exist');
    })
})