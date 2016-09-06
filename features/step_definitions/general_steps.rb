Given /^I am on the '([^"]*)' page$/ do |page| 
  path_for = {
    'Home' => '/'
  }
  visit path_for[page]
end

When /^I fill in '([^"]*)' for '([^"]*)'$/ do |value,field|
  fill_in(field,:with => value)
end

When(/^I select the '([^"]*)' button$/) do |button_name|
  page.find("#"+button_name).click
end

Then /^I should see text '([^"]*)'$/ do |text|
  expect(page).to have_content text
end

