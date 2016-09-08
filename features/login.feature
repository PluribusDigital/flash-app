@javascript
Feature: User Login feature
  As a system user 
  I want to be able to login
  So that I securely access the application

  Scenario: Successful login
    Given I am on the 'Login' page
     When I fill in 'gwashington' for 'username'
      And I fill in 'george1' for 'password'
      And I select the 'sign-in-button' button
     Then I should see text 'YOUR RECOGNITIONS'

  Scenario Outline: Unsuccessful login
    Given I am on the 'Login' page
     When I fill in <username> for 'username'
      And I fill in <password> for 'password'
      And I select the 'sign-in-button' button
     Then I should not see text 'YOUR RECOGNITIONS'

  Examples:
    | username              | password  |
    | "gwashington"         | "foo"     |
    | "gwash"               | "george1" |