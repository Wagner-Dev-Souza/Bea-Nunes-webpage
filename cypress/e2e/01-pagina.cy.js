/**
 * Estrutura e conteúdo da página.
 *
 * Verifica o que precisa estar de pé para a página cumprir o papel dela:
 * ser encontrada (título e descrição), apresentar as seções, e carregar as
 * imagens — que são o principal ativo visual de uma página institucional.
 */
describe('Página da Beatriz Nunes', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('carrega com o título e o idioma corretos', () => {
    cy.title().should('include', 'Veterinária');
    cy.get('html').should('have.attr', 'lang', 'pt-BR');
  });

  it('traz descrição para busca e compartilhamento', () => {
    cy.get('meta[name="description"]')
      .should('have.attr', 'content')
      .and('have.length.greaterThan', 40);

    // Open Graph é o que define o cartão exibido ao compartilhar o link
    cy.get('meta[property="og:title"]').should('exist');
    cy.get('meta[property="og:image"]').should('exist');
  });

  it('apresenta todas as seções da página', () => {
    ['sobre', 'diferenciais', 'atendimento', 'galeria', 'contato'].forEach((id) => {
      cy.get(`#${id}`).should('exist');
    });
  });

  it('exibe o cabeçalho com a navegação', () => {
    cy.get('#site-header').should('be.visible');
    cy.get('#site-nav .nav-link').should('have.length', 4);
  });

  it('carrega a imagem de perfil e a foto principal', () => {
    cy.get('.brand-avatar').should(($img) => {
      expect($img[0].naturalWidth, 'foto de perfil não carregou').to.be.greaterThan(0);
    });

    cy.get('.hero-photo').should(($img) => {
      expect($img[0].naturalWidth, 'foto principal não carregou').to.be.greaterThan(0);
    });
  });

  it('oferece um caminho de contato na área correta', () => {
    cy.get('#contato').should('be.visible');
    cy.get('#contato a').should('have.length.at.least', 1);
  });
});
