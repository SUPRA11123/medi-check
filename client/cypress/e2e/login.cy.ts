/// <reference types="cypress" />

describe('Login Flow', () => {
  it('logs in successfully with valid credentials', () => {
    cy.visit('/login');

    cy.get('input[name="email"]').type('user@test.com');
    cy.get('input[name="password"]').type('securepass');
    cy.get('button[type="submit"]').click();

    cy.on('window:alert', (text) => {
      expect(text).to.include('"success":true');
    });
  });

  it('shows error alert on wrong credentials', () => {
    cy.visit('/login');

    cy.get('input[name="email"]').type('wrong@test.com');
    cy.get('input[name="password"]').type('wrongpass');
    cy.get('button[type="submit"]').click();

    cy.on('window:alert', (text) => {
      expect(text).to.include('"success":false');
    });
  });
});

describe('Appointments Page', () => {
  it('displays list of appointments', () => {
    cy.visit('/appointments');
    cy.contains('Appointments');
    cy.get('ul li').should('contain.text', 'Dr. Green');
  });
});

describe('Navigation', () => {
  it('navigates to all main pages', () => {
    cy.visit('/login');
    cy.visit('/appointments');
    cy.contains('Appointments');

    cy.visit('/prescriptions');
    cy.contains('Prescriptions');
  });
});
describe('Authenticated Access to Appointments', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.window().then((win) => {
      win.localStorage.setItem('authToken', '123abc');
    });
  });

  it('accesses appointments when logged in', () => {
    cy.visit('/appointments');
    cy.contains('Appointments');
  });
});
describe('Unauthenticated Access to Appointments', () => {
  it('redirects to login if not authenticated', () => {
    cy.visit('/appointments');
    cy.url().should('include', '/login');
  });
});