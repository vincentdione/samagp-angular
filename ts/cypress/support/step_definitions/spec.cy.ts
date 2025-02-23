

import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("je visite", () => {
  cy.visit("/");
});

Then("je clique sur connexion", () => {

});
