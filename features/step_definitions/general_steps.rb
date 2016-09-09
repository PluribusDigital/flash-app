Given /^I am on the 'home' page$/ do  
  visit "/"
end

Given /^I logout$/ do  
  find("li.logout a").click
end

When /^I fill in '([^"]*)' for '([^"]*)'$/ do |value,field|
  fill_in(field,:with => value)
end

When(/^I fill in "([^"]*)" for '([^"]*)'$/) do |value,field|
  fill_in(field,:with => value)
end


When(/^I select the '([^"]*)' option for 'Category'$/) do |value|
  find("option[value='string:Teamwork']").click
end


When(/^I select the '([^"]*)' button$/) do |button_name|
  page.find("#"+button_name).click
end

Then /^I should see text '([^"]*)'$/ do |text|
  expect(page).to have_content text
end

Then /^I should not see text '([^"]*)'$/ do |text|
  expect(page).to_not have_content text
end

Then(/^I should be on the home page$/) do
  expect(page).to have_content 'MENU'
end

When(/^I select the '([^"]*)' navigation item$/) do |text|
  click_link text
end

When(/^I select "([^"]*)" from the nominee result list$/) do |text|
  find("li.uib-typeahead-match").click
end


Given(/^I am logged in as '([^"]*)'$/) do |username|
  passwords = {
    alincoln: 'abraham16'
  }
  steps %Q{
    Given I logout
     When I fill in '#{username}' for 'username'
      And I fill in '#{passwords[username]}' for 'password'
      And I select the 'sign-in-button' button
  }
end



When(/^I logout and log back in as '([^"]*)'$/) do |username|
  steps %Q{
    Given I logout
    Given I am logged in as '#{username}'
  }
end
