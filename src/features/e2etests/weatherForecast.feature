Feature: To test the weather forecast application.

    Background:
        Given I open the site "/"

    Scenario Outline: Check weather forecast for specific city and summarize the same.
        When I enter <city> name
        And I verify five days weather is displayed
        And I click on a <day> to check hourly forecast
        And I click on a <day> to hide the wethere forecast
        And I display the current climate of selected <day>
        And I display min and max temperature of selected <day>
        And I display dominant wind speed of selected <day>
        Then I display the aggregate rainfall of selected <day>

    Examples:
        |city| day |
        | edinburgh |  5  |
        | aberdeen  |  1  |
        | dundee    |  3  |
        | perth     |  4  |
        | stirling  |  5  |
        | glasgow   |  2  |

    Scenario Outline: Error scenarios
        When I enter <city> name
        Then I verify blank value for city display error <msg>

        Examples:
            |city|msg|
            | invalidcity |Error retrieving the forecast    |