describe('Dashboard', () => {
  //go to the home url before every test
  beforeEach(() => {
    cy.visit("/"); 
  });

  it('should load dashboard', () => {
    cy.contains('h4', 'Dataviz')
  })

  it("should allow adding records", () => {
    //initial data length is 5
    cy.contains('1-5 of 5')
      cy.contains('Add New').click() //add new button
      //insert data in fields
      cy.get('input[name="year').type('2000')
        .type(189) 
        .type("{enter}"); // press enter

      cy.get('input[name="sale').type('152')
        .type(281) 
        .type("{enter}"); // press enter

      cy.get('input[name="transactions').type('525')
        .type(187191) 
        .type("{enter}"); // press enter

      //save record
      cy.contains('Save').click() 

      cy.contains('1-6 of 6')
  })


  it("should allow record editing", () => {
      //click edit icon
      cy.get('#edit').click()
      //change transactions field
      cy.get('input[name="transactions')
        .clear()
        .type(102191) 
        .type("{enter}"); // press enter
      cy.contains('Save').click() 
      cy.contains('102191') //check if edited record exist
  })


  it("should allow record deletion", () => {
    cy.contains('2015')
    cy.get('#delete').click() //delete first element
    cy.contains('2015').should('not.exist')
    
  })

  it("should allow navigation", () => {
      //load search page
      cy.contains('Smart Search').click() 
      cy.contains('Smart search')
  })
})
