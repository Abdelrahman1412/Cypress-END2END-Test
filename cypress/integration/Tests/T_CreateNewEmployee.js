
describe('Create New Employee Test',function(){

    it('Employee Creation - Step1',function(){

        const filepath = 'Files/CV_TESTING_11_2021.pdf'

        // navigate to Login Page 
        cy.visit('https://beta.workmotion.com/login')
        // Email Field 
        cy.get('#email').type("aliaa+qahrmanager@workmotion.com")
        // Password field
        cy.get('#password').type('Test1234')
        //Login Button 
        cy.get('.sc-eCImPb').click()
        // 
        cy.get('[style="min-width: 140px;"]').should('be.visible')
        // click Add new Employee 
        cy.get('[data-btn-type="default"]').click()
        // enter country name 
        cy.get('[class=" css-1mmqzn1-control"]').click().type('Germany')
        // choose a country from the suggested list 
        cy.get('#react-select-2-option-53').click()
        // submitting choice 
        cy.get('button[name="get-started"]').click()
        // Entering Talents First Name 
        cy.get('[placeholder~="first"]').type('Abdelrahman')
        // Entering Talents Last Name 
        cy.get('[placeholder~="last"]').type('Tarek')
        // Entering Job Title 
        cy.get("input[placeholder~='Designer']").type('Software Tester')
        // Entering Job Description 
        cy.get("textarea[placeholder~='description']").type('Doesnt have to be Very long description :D ')
        // Entering business assignment contex
        cy.get("textarea[placeholder~='assignment']").type('whatever business assignment context means.. ')
        // Clicking the Radio Buttons
        cy.get("[class='sc-iJuVqt fNzFvY']").click({ multiple: true })
        // Entering Contract Start Date
        cy.get('#b7108ff2-984f-3609-b62f-5f38699f7b45').type('10-12-2021').type('{enter}')
         // Entering Contract End Date
        cy.get('#e3e1440d-2290-46f6-a2b9-8f3ff94fa606').type('15-12-2022').type('{enter}')
        // Entering Cost Center
        cy.get('[placeholder~="Center"]').type('Test Cost Center')
        // Entering text 
        cy.get('input[name="8cc64354-dec2-3e7b-9a30-2a5e7f43e7aa"]').type('Name of Signatory')
        // Entering text 
        cy.get('input[name="3de5eed9-c04b-3f70-b52f-7ffc3b6d5a3f"]').type('Title of Signatory')
        // Entering text 
        cy.get('[placeholder~="marta@company.com"]').type('Test@test.test')
        // clicking Continue
        cy.get('button[type="submit"]').click()
        // Clicking page buttons
        cy.get('.sc-cBNeex>button').click({ multiple: true })
        // Entering text 
        cy.get("textarea[placeholder~='facilitate']").type('Doesnt have to be Very long description :D ')
        // Clicking Continue
        cy.get('button[type="submit"]').click()
        // Entering Salary 
        cy.get('[placeholder~="4000"]').type('20000')
        // Clicking the Switch  
        cy.get('.react-switch-handle').click()
        // Entering Salary 
        cy.get('[placeholder~="10000"]').type('40000')
        // clicking the List 
        cy.get('.css-99ugtq-control').click()
        // choosing 1st item from the list 
        cy.get('#react-select-3-option-0').click()
        // Entering text 
        cy.get('[placeholder~="1000"]').type('15000')   
        // clicking continue 
        cy.get('button[type="submit"]').click()
        // Entering text 
        cy.get('#da1b7b0d-61e5-30c8-acb9-3fcaf9c1f91e').type('Employer@email.com')
        // clicking continue 
        cy.get('button[type="submit"]').click()
        // confirm Terms and conditions 
        cy.get('.sc-kstqJO').click()
        // clicking FINISH
        cy.get('button[name="proceed-4"]').click()
        // Asserting the Success Msg 
        cy.get('.sc-aKXVD').should('be.visible')

    })
    

    it('Mark Action "Done"',function(){

        const filepath = 'Files/CV_TESTING_11_2021.pdf'

        // navigate to Login Page 
        cy.visit('https://beta.workmotion.com/login')
        // Email Field 
        cy.get('#email').type("aliaa+qahrmanager@workmotion.com")
        // Password field
        cy.get('#password').type('Test1234')
        //Login Button 
        cy.get('.sc-eCImPb').click()
        // navigating to Action Items 
        cy.get('a[href="/action-items"]').click()
        // Mark as Done  
        cy.get('div.sc-JkixQ.erCTPX div.sc-gGPzkF.idUdRJ main.sc-dkQkyq.bGyeed div.sc-jivBlf.khvkWd section.sc-edERGn.kEKenT:nth-child(4) div:nth-child(2) > button.sc-hKwDye.jBlaPE.sc-eicpiI.kenRnA:nth-child(1)').click()
        // Check Action Marked as Done 
        cy.get('h3[class="sc-gnnDb sc-igXgud gDRqlQ dBJiOL"]+section >div> h4>span').should('have.text','Abdelrahman Tarek in Germany has been invited to join WorkMotion!')

    })
})