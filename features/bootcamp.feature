Feature: Bootcamp E2E

  Background:
    Given I am on the home page
    And The promo banner is closed if it appears

  Scenario:  Search bar
    When I enter the word "Windows" in the search bar
    And I click the search
    Then I should check that at least one item appears

  Scenario:  Internet shop logo button
    When I open Today's Best Deals tab
    And I click on the Internet shop logo
    Then I should check that the main page opened

