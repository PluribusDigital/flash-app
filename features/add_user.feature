@javascript
Feature: Add a User
  As a system user 
  I want to be able to add a new user 
  So that I can have them available to give kudos to

  Scenario: Successfully Add User
    Given I am logged in as 'alincoln'
      And I am on the 'home' page
     When I select the 'ADD A USER' navigation item
      And I fill in 'Homer' for 'First Name'
      And I fill in 'Simpson' for 'Last Name'
      And I fill in 'homer@simpsons.com' for 'email'
      And I select the 'Submit' button
      And I logout and log back in as 'hsimpson'
     Then I should be on the home page after successful login