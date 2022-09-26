/* eslint-disable no-undef */
/// <reference types="cypress" />

import dotenv from "dotenv";

dotenv.config();
const BASE_URL = "http://localhost:3000/top";

beforeEach(() => cy.visit(BASE_URL));

describe("Top page tests", () => {
  it("Should go to the top page when clicking at top button", async () => {
    cy.get("a").contains("top").click();
    cy.url().should("eq", `${BASE_URL}/top`);
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
