@javascript
Feature: Give a Kudo
  As a system user 
  I want to be able to give a kudo to a peer
  So that I can recognize them for a job well done

  Scenario: Give kudo
    Given I am logged in as 'gwashington'
      And I am on the 'home' page
     When I select the 'Give Kudo' button
      And I fill in 'alincoln' for 'Nominee'
      And I fill in 'thanks for helping on the DHS FLASH project' for 'Comment'
      And I select the 'Teamwork' option for 'Category'
      And I select the 'Submit' button
      And I logout and log back in as 'alincoln'
      And I am on the 'home' page
     Then I should see text 'thanks for helping on the DHS FLASH project'

  