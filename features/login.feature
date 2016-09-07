Feature: User Login feature
  As a system user 
  I want to be able to login
  So that I securely access the application

  @javascript
  Scenario: Successful login
    Given I am on the 'Login' page
     When I fill in 'gwashington' for 'username'
      And I fill in 'george1' for 'password'
      And I select the 'sign-in-button' button
     Then I should see text 'YOUR RECOGNITIONS'
