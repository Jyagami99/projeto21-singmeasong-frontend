/* eslint-disable no-undef */
/// <reference types="cypress" />

import dotenv from "dotenv";

dotenv.config();
const BASE_URL = "http://localhost:3000";

beforeEach(() => cy.visit(BASE_URL));

describe("Home page tests", () => {
  it("Should load recommendations", async () => {
    cy.get("article").should("have.length", 2);
  });

  it("Should go home when clicking at home button", async () => {
    cy.get("a").contains("Home").click();
    cy.url().should("eq", BASE_URL + "/");
  });

  it("Should create a new recommendation when filling the form correctly", async () => {
    cy.get('input[name="name"]').type("Test");
    cy.get('input[name="link"]').type("https://www.youtube.com/watch?v=1");
    cy.get(".create-recommendation").click();
    cy.get("article").should("have.length", 3);
  });

  it("Should not create a new recommendation when filling the form incorrectly", async () => {
    cy.get('input[name="name"]').type("Test");
    cy.get('input[name="link"]').type("https://www.some-wrong-link.com/");
    cy.get(".create-recommendation").click();

    cy.on("window:alert", (str) => {
      expect(str).to.equal(`Error creating recommendation!`);
    });

    cy.get("article").should("have.length", 2);
  });

  it("Should upvote a video when clicking at upvote button", async () => {
    cy.get("[data-cy-upvote]").click();
    cy.get("[data-cy-upvote]").should("have.text", "1");
  });

  it("Should downvote a video when clicking at downvote button", async () => {
    cy.get("[data-cy-downvote]").click();
    cy.get("[data-cy-downvote]").should("have.text", "-1");
  });
});
