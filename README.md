# flash-app
[![Build Status](https://travis-ci.com/STSILABS/flash-app.svg?token=s8fjYespqEg1vvrpYmqn&branch=develop)](https://travis-ci.com/STSILABS/flash-app)
[![Code Climate](https://codeclimate.com/repos/57c75866b805384cf700073e/badges/f2b8b7602ac5c90cb1d2/gpa.svg)](https://codeclimate.com/repos/57c75866b805384cf700073e/feed)
[![Test Coverage](https://codeclimate.com/repos/57c75866b805384cf700073e/badges/f2b8b7602ac5c90cb1d2/coverage.svg)](https://codeclimate.com/repos/57c75866b805384cf700073e/coverage)

DHS Flash Technical Challenge

## Installation

Follow the installation steps below to get the Frontend AngularJS application running locally

```
- git clone https://github.com/STSILABS/flash-app.git
- cd flash-app
- cp src/app/app.example.config.js src/app/app.config.js
```

Use your favorite editor to update the `app.config.js` file with necessary variables (URL Base Route and API Key)

```
- npm install -g bower-npm-resolver
- npm install
- bower install
- gulp serve
```

Note: You may have to run `sudo npm install --global gulp-cli`

## Running Tests

Use the following command to run the unit tests for the application
```
gulp test
```
