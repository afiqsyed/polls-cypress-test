Feature: Polls IO Question Page

    Verify Polls IO Question Page With The Following Question and Options
    | question                               | option1         | option2         | option3         | option4         | option5         |
    | Sample Question For Question Page Test | Sample Option 1 | Sample Option 2 | Sample Option 3 | Sample Option 4 | Sample Option 5 |

    Background:
        Given Polls question is created

    Scenario: User can only select 1 answer from the poll
        Given User opens the Polls.io Question Page
        When User click vote on answer page
        And User click "Sample Option 4" from the option list checkbox
        And User click "Sample Option 5" from the option list checkbox
        Then "Sample Option 4" checkbox will be unchecked
        And "Sample Option 5" checkbox will be checked
    
    Scenario: Click View Result Button Will Show The Poll Result
        Given User opens the Polls.io Question Page
        When User click vote on answer page
        And User click view result button
        Then Result page will be displayed

    Scenario: Open and Answer Question Directly From Direct URL
        Given User opens the Polls.io Question Page
        When User click vote on answer page
        And User click "Sample Option 2" from the option list checkbox
        And Click submit button
        Then Result page will be displayed

    Scenario: Click back button will redirect user to home page
        Given User opens the Polls.io Question Page
        When User click the back button
        Then User redirected back to home page

    Scenario: Verify copy link from share button is correct
        Given User opens the Polls.io Question Page
        When User click the share button
        And User click copy link and the link is correct
        Then Copied to clipboard banner displayed

    Scenario: Verify embed code link is correct
        Given User opens the Polls.io Question Page
        When User click the share button
        And User click copy embed code
        Then Embed code popup will be displayed with correct embed code

    Scenario: Verify share to Facebook is working
        Given User opens the Polls.io Question Page
        When User click the share button
        And User click share to Facebook
        Then New windows with correct Facebook URL is open
    
    Scenario: Verify share to Twitter is working
        Given User opens the Polls.io Question Page
        When User click the share button
        And User click share to Twitter
        Then New windows with correct Twitter URL is open

    Scenario: Verify share to Linkedin is working
        Given User opens the Polls.io Question Page
        When User click the share button
        And User click share to Linkedin
        Then New windows with correct Linkedin URL is open