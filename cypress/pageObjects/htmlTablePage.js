
class HtmlTablePage {
  tagHeader = 'h1';
  btnTableData = 'summary'
  txtInputJsonData = '#jsondata'
  btnRefreshTable = '#refreshtable'
  tblDynamicTable = '#dynamictable'

  //---method for clicking on table data button
  clickOnTableDataButton() {
    cy.get(this.btnTableData, { timeout: Cypress.config("defaultCommandTimeout") }).should("be.visible");
    cy.get(this.btnTableData).click();
    cy.get(this.txtInputJsonData, { timeout: Cypress.config("defaultCommandTimeout") }).should("be.visible");
  }

  //---method for inserting the test data to input text box
  enterTestDataIntoInputTextbox(testData) {
    cy.get(this.txtInputJsonData).clear();
    cy.get(this.txtInputJsonData).type(testData, { force: true, parseSpecialCharSequences: false });
  }

  //---method for clicking on refresh table button
  clickOnRefreshTableButton() {
    cy.get(this.btnRefreshTable).click();
  }

  // ---method for verfying the count of rows in dynamic table
  verifyCountOfDynamicTableRows(noOfRows) {
    cy.get(this.tblDynamicTable).find("tr").then((row) => { }).should('have.length', noOfRows)
  }

  //---method for verifying the data from dynamic table with test data we passed
  verifyTableDataWithTestData(testData) {
    cy.get(this.tblDynamicTable).find("tr").each(($row, index) => {
      // skipping the first iteration because we are getting headers data
      if (index === 0) {
        return;
      }
      // Extract data from each cell in the row
      const name = $row.find('td:not(th):eq(0)').text();
      const age = $row.find('td:not(th):eq(1)').text();
      const gender = $row.find('td:not(th):eq(2)').text();
 
      // expecting the actual data with test Data
      expect(name).to.eq(testData[index - 1].name);
      expect(age).to.eq((testData[index - 1].age).toString());
      expect(gender).to.eq(testData[index - 1].gender);
    });
  }

}
const htmlTablePage = new HtmlTablePage();
export default htmlTablePage;
