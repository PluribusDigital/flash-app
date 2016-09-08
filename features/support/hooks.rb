Capybara.app_host = "http://localhost:3000/"
Capybara.default_driver = :selenium

AfterStep('@pause') do
  print "Press Return to continue"
  STDIN.getc
end

AfterStep('@slow') do
  sleep 2 #seconds
end

