
const SEARCH_FIELD = 'input[type=text]';


class HomePage {
  static visit() {
    cy.visit('/');
  }

  static type(query) {
    cy.get(SEARCH_FIELD) // 2 seconds
      .type(query);
  }

  static selectitem() {
    cy.get('.prdctfltr_checkboxes [type="checkbox"]')
    .check(['#method-ship'])
  
  }
}

export default HomePage;
