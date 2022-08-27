## Tools/Plugin Used
1. Cypress (https://www.cypress.io/)
2. Cucumber (https://github.com/badeball/cypress-cucumber-preprocessor)
3. Multiple Cucumber HTML Reporter (https://github.com/wswebcreation/multiple-cucumber-html-reporter)
4. Cypress Wait Until (https://github.com/NoriSte/cypress-wait-until)

## Pre-Requisite
1. Install latest NodeJs version -https://nodejs.org/es/download/
2. Download and install the JSON fomatter - https://github.com/cucumber/json-formatter

## How to execute the test ?
Open terminal and run the following command
1. npm install
2. 'npm run cypress:execution'
   or 
   'npx cypress open' (Execute the test using cypress UI)

## Reports
Each time after the tests are executed using console. It will generate the 'cucumber-report.html' file that contain the test report

## Test Cases Covered
##Home Page
1. Create and Answer Poll With Minimum 2 Options on <ScreenSize>  (This test run for 2 time with different screen size)
2. Create and Answer Poll With 5 Options on <ScreenSize> (This test run for 2 time with different screen size)
3. Show Error When Poll is Created With 1 Option
4. Show Error When Poll is Created Without Option
5. Verify Add Another Option Button is Working
6. Show Error If Question is less than 10 character
7. Verify Translation Features is working
8. Verify Popular Pools Section Displayed Correctly
9. Show Error When Create Poll Button is clicked under 10 seconds after the page load
10. User can navigate to terms page
11. User can navigate to blog page
12. User can navigate to contact page
13. User can navigate to Polls IO Twitter page
14. User can navigate to Polls IO Linkedin page 
## Question Page
1. User can only select 1 answer from the poll
2. Click View Result Button Will Show The Poll Result
3. Open and Answer Question Directly From Direct URL
4. Click back button will redirect user to home page
5. Verify copy link from share button is correct
6. Verify embed code link is correct
7. Verify share to Facebook is working
8. Verify share to Twitter is working
9. Verify share to Linkedin is working

![image](https://user-images.githubusercontent.com/12548605/187044523-395b8177-88f8-4c22-a2d4-67fae336352e.png)
![image](https://user-images.githubusercontent.com/12548605/187044560-4e45157f-72fd-4c63-a8a5-6a5e2d1a654f.png)
