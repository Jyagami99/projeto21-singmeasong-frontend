/* eslint-disable no-undef */
/// <reference types="cypress" />

import dotenv from "dotenv";

dotenv.config();
const BASE_URL = "http://localhost:3000/random";

beforeEach(() => cy.visit(BASE_URL));

describe("Random page tests", () => {
  it("Should go to the random page when clicking at random button", async () => {
    cy.get("a").contains("random").click();
    cy.url().should("eq", `${BASE_URL}/random`);
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
