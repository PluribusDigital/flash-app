@javascript
Feature: Give a Kudo
  As a system user 
  I want to be able to give a kudo to a peer
  So that I can recognize them for a job well done

  Scenario: Successfully Give kudo
    Given I am logged in as 'alincoln'
      And I am on the 'home' page
     When I select the 'Give Kudo' button
      And I fill in 'taf' for 'Nominee'
      And I select "William Taft" from the nominee result list
      And I fill in 'thanks for helping on the DHS FLASH project' for 'Comment'
      And I select the 'Teamwork' option for 'Category'
      And I select the 'Submit' button
     Then I should be back on the 'home' page
      And I should see text 'Kudo created'

  