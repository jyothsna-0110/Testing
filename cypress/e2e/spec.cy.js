
import htmlTablePage from '../pageObjects/htmlTablePage'
import { before } from "mocha"

import jsonTestData from '../fixtures/testData.json'
// stringify the json data because cypress accepts only strings and numbers for type command
var testData = JSON.stringify(jsonTestData.testData);
var applicationUrl = Cypress.env('baseUrl')
var noOfRowsBeforeRefreshTable = 3

describe('Login and Add Data to Dynamic Table', () => {
  before(() => {
    cy.loginMethod(applicationUrl);
  })
  it('user should log in, insert test data, and verify added data', { tags: ["@test"] }, () => {
    htmlTablePage.clickOnTableDataButton();
    htmlTablePage.enterTestDataIntoInputTextbox(testData);
    htmlTablePage.verifyCountOfDynamicTableRows(noOfRowsBeforeRefreshTable)
    htmlTablePage.clickOnRefreshTableButton()
    htmlTablePage.verifyCountOfDynamicTableRows(parseInt(jsonTestData.testData.length) + 1)
    htmlTablePage.verifyTableDataWithTestData(jsonTestData.testData)
  })
})