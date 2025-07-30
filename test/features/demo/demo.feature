Feature: Demo feature


    @demo
    Scenario Outline: User login with valid credentials
    Given Open sauce demo 
    When  I enter the username
    And I enter the password
    And I clicked on login btn
    Then I should be logged in successfully
    # Then URL should match to <ExpectedURL>


    Examples:
        | TestID | userName | password |  
        | DEMO_TC01 | standard_user | secret_sauce | 