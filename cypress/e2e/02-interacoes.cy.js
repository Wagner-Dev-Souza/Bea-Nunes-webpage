/**
 * Interações da página.
 *
 * Cobre os comportamentos que dependem de JavaScript: sombra do cabeçalho ao
 * rolar, revelação dos blocos conforme entram na tela, galeria com ampliação
 * das fotos (incluindo navegação por teclado) e o menu no celular.
 *
 * O teste da galeria também serve de regressão para carga de imagem: as fotos
 * usam `loading="lazy"`, então só são buscadas quando entram na tela — e o
 * caminho precisa estar correto para elas aparecerem.
 */
describe('Interações', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  describe('Cabeçalho', () => {
    it('ganha sombra ao rolar e perde ao voltar ao topo', () => {
      cy.get('#site-header').should('not.have.class', 'is-scrolled');

      cy.scrollTo(0, 400);
      cy.get('#site-header').should('have.class', 'is-scrolled');

      cy.scrollTo(0, 0);
      cy.get('#site-header').should('not.have.class', 'is-scrolled');
    });
  });

  describe('Revelação ao rolar', () => {
    it('marca o conteúdo inicial como visível', () => {
      cy.get('.hero-content').should('have.class', 'reveal');
      cy.get('.hero-content').should('have.class', 'is-visible');
    });

    it('revela os blocos da galeria quando chegam na tela', () => {
      cy.get('.gallery-item').last().scrollIntoView();
      cy.get('.gallery-item').last().should('have.class', 'is-visible');
    });
  });

  describe('Galeria', () => {
    it('carrega as fotos depois que elas entram na tela', () => {
      cy.get('.gallery-item').first().scrollIntoView();

      // O should com callback é repetido até a imagem carregar — evita espera fixa.
      cy.get('.gallery-item img').first().should(($img) => {
        expect($img[0].naturalWidth, `foto da galeria não carregou: ${$img.attr('src')}`).to.be.greaterThan(0);
      });
    });

    it('abre a foto ampliada ao clicar', () => {
      cy.get('#lightbox').should('not.be.visible');

      cy.get('.gallery-btn').first().click();

      cy.get('#lightbox').should('be.visible');
      cy.get('#lightbox-img').should('have.attr', 'src').and('include', 'assets/img/');
    });

    it('navega entre as fotos com os botões', () => {
      cy.get('.gallery-btn').first().click();
      cy.get('#lightbox-img').invoke('attr', 'src').then((primeira) => {
        cy.get('#lightbox-next').click();
        cy.get('#lightbox-img').invoke('attr', 'src').should('not.equal', primeira);

        cy.get('#lightbox-prev').click();
        cy.get('#lightbox-img').invoke('attr', 'src').should('equal', primeira);
      });
    });

    it('fecha com a tecla Esc', () => {
      cy.get('.gallery-btn').first().click();
      cy.get('#lightbox').should('be.visible');

      cy.get('body').type('{esc}');
      cy.get('#lightbox').should('not.be.visible');
    });

    it('fecha ao clicar no botão de fechar', () => {
      cy.get('.gallery-btn').first().click();
      cy.get('#lightbox').should('be.visible');

      cy.get('#lightbox-close').click();
      cy.get('#lightbox').should('not.be.visible');
    });
  });

  describe('Menu no celular', () => {
    beforeEach(() => {
      cy.viewport(390, 844);
    });

    it('abre e fecha pelo botão, avisando o estado para leitores de tela', () => {
      cy.get('#hamburger').should('be.visible');
      cy.get('#site-nav').should('not.have.class', 'is-open');
      cy.get('#hamburger').should('have.attr', 'aria-expanded', 'false');

      cy.get('#hamburger').click();
      cy.get('#site-nav').should('have.class', 'is-open');
      cy.get('#hamburger').should('have.attr', 'aria-expanded', 'true');
      cy.get('#hamburger').should('have.attr', 'aria-label').and('include', 'Fechar');

      cy.get('#hamburger').click();
      cy.get('#site-nav').should('not.have.class', 'is-open');
      cy.get('#hamburger').should('have.attr', 'aria-expanded', 'false');
    });

    it('fecha ao escolher um item do menu', () => {
      cy.get('#hamburger').click();
      cy.get('#site-nav').should('have.class', 'is-open');

      cy.get('#site-nav .nav-link').first().click();
      cy.get('#site-nav').should('not.have.class', 'is-open');
    });
  });
});
