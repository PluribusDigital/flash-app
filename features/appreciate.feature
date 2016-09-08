@javascript
Feature: Create appreciation
  As a system user 
  I want to be able to recognize a peer
  So that I can give them kudos for a job well done

  Scenario: Give appreciation
    Given I am logged in as 'gwashington'
      And I am on the 'main' page
     When I fill in 'lincoln' for 'search'
      And I select the 'Abraham Lincoln' from the search results
      And I fill in 'thanks for helping on the DHS FLASH project' for 'description'
      And I fill in 'made our IT procurement much better' for 'effect'
      And I logout and login as 'alincoln'
      And I am on the 'main' page
     Then I should see text 'thanks for helping on the DHS FLASH project'

  