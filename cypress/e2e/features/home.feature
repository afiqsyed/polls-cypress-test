Feature: Polls IO Homepage

    Verify Polls IO Homepage

    Scenario Outline: Scenario Outline name: Create and Answer Poll With Minimum 2 Options on <ScreenSize>
        Given A user opens the Polls.io website on "<ScreenSize>"
        When User enters the poll question "This is the test question"
        And User fill up the poll options
            | position | name     |
            |   1      | Option 1 Sample |
            |   2      | Option 2 Sample |
        And A user clicks on the Create this poll button
        Then Poll page will displayed with the question and 2 options
            | question                  | option1         | option2         |
            | This is the test question | Option 1 Sample | Option 2 Sample |
        When User click vote on answer page
        And User click "Option 2 Sample" from the option list checkbox
        And Click submit button
        Then Result page will be displayed
    
        Examples:
            | ScreenSize  |
            | iphone-x    |
            | macbook-15  |
    
    Scenario Outline: Create and Answer Poll With 5 Options on <ScreenSize>
        Given A user opens the Polls.io website on "<ScreenSize>"
        When User enters the poll question "This is the test question"
        When User click add another option button for 2 times
        And User fill up the poll options
            | position | name            |
            |   1      | Option 1 Sample |
            |   2      | Option 2 Sample |
            |   3      | Option 3 Sample |
            |   4      | Option 4 Sample |
            |   5      | Option 5 Sample |
        And A user clicks on the Create this poll button
        Then Poll page will displayed with the question and 5 options
            | question                  | option1         | option2         | option3         | option4         | option5         |
            | This is the test question | Option 1 Sample | Option 2 Sample | Option 3 Sample | Option 4 Sample | Option 5 Sample |
        When User click vote on answer page
        And User click "Option 3 Sample" from the option list checkbox
        And Click submit button
        Then Result page will be displayed

        Examples:
            | ScreenSize  |
            | iphone-x    |
            | macbook-15  |

    Scenario: Show Error When Poll is Created With 1 Option
        Given A user opens the Polls.io website
        When User enters the poll question "This is the test question"
        And User fill up the poll options
            | position | name            |
            |   1      | Option 1 Sample |
        And A user clicks on the Create this poll button
        Then Error messages "You must enter at least two options." is displayed

    Scenario: Show Error When Poll is Created Without Option
        Given A user opens the Polls.io website
        When User enters the poll question "This is the test question"
        And A user clicks on the Create this poll button
        Then Error messages "You must enter at least two options." is displayed

    Scenario: Verify Add Another Option Button is Working
        Given A user opens the Polls.io website
        When User click add another option button for 2 times
        Then 2 New option fields is added from initial 3

    Scenario: Show Error If Question is less than 10 character
        Given A user opens the Polls.io website
        When User enters the poll question "Short"
        And User fill up the poll options
            | position | name            |
            |   1      | Option 1 Sample |
            |   2      | Option 2 Sample |
        And A user clicks on the Create this poll button
        Then Error messages "Question must be at least 10 characters long" is displayed

    Scenario: Verify Translation Features is working
        Given A user opens the Polls.io website
        When User click language button
        And User select "Deutsch"
        Then the page is translated to Deutsch
            |Welcometo      | SiteDescription                 | QuestionLabel                             | OptionLabel                                      | CreatePollButton  | AddOptionButton             |
            |Willkommen auf | Erstellen Sie einfache Umfragen | Geben Sie eine Frage für Ihre Umfrage ein | Geben Sie beliebig viele Antwortmöglichkeiten an | Umfrage erstellen | Weitere Optionen hinzufügen |

    Scenario: Verify Popular Pools Section Displayed Correctly
        Given A user opens the Polls.io website
        When User navigate to popular polls Section
        Then The section display correctly with 8 popular polls
        When User click on the first popular polls
        Then User are navigated to the poll page

    Scenario: Show Error When Create Poll Button is clicked under 10 seconds after the page load
        Given A user opens the Polls.io website
        When User enters the poll question "This is the test question"
        And User fill up the poll options
            | position | name            |
            |   1      | Option 1 Sample |
            |   2      | Option 2 Sample |
        And A user clicks on the Create this poll button without waiting 10 seconds
        Then Error messages "Unfortunately, your request has been classified as spam by our system. You should submit the form first 10 seconds after opening it and don't fill any hidden form fields. Please try again." is displayed

    Scenario: User can navigate to terms page
        Given A user opens the Polls.io website
        When User click term hyperlink at the footer section
        Then User is navigated to Terms and Condition page

    Scenario: User can navigate to blog page
        Given A user opens the Polls.io website
        When User click blog hyperlink at the footer section
        Then User is navigated to Blog page

    Scenario: User can navigate to contact page
        Given A user opens the Polls.io website
        When User click contact hyperlink at the footer section
        Then User is navigated to Contact Us page

    Scenario: User can navigate to Polls IO Twitter page
        Given A user opens the Polls.io website
        When User click Follow Us On Twitter at the footer section
        Then User is navigated to Poll IO Twitter page

    Scenario: User can navigate to Polls IO Linkedin page
        Given A user opens the Polls.io website
        When User click Follow Us On Linkedin at the footer section
        Then User is navigated to Poll IO Linkedin page