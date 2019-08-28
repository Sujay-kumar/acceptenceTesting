Feature: Test the page title
    As a developer
    I want to be able to test if a page has a certain title

    Background:
        Given I open the site "/"

    Scenario Outline: Check weather forecast for specific city
        And I enter <city> name
        And I verify five days weather is displayed
        And I click on a <day> to check hourly forecast
        And I click on a <day> to hide the wethere forecast

    Examples:
        |city| day |
        |edinburgh    | 5|