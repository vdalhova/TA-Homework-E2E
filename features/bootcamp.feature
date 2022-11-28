Feature: E2E tests for the "Newegg" Internet store

  Background:
    Given The main page is opened
    And The promo banner is closed if it appears

  Scenario Outline:  As a user, I can search <item> using the search bar
    When I type "<item>" in the search bar
    And I click the search button
    Then I see that at least one "<item>" appears on the page

    Examples:
      | item      |
      | grill pan |
      | kettle    |
      | microwave |

  Scenario: As a user, I can open the main page by clicking on the logo of the Internet store
    When I click on the Today's Best Deals tab
    And I click on the logo of the Internet store
    Then I'm on the main page

