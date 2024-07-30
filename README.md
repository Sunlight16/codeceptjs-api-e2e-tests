# codeceptjs-api-e2e-tests Project

This is an example project of API tests created by Tanya Parashchenko.

# Goal

Create e2e automation coverage for API endpoints available in https://thinking-tester-contact-list.herokuapp.com/ example.

# Project setup

Based on NodeJS, the project uses [CodeceptJS](https://codecept.io/basics/#getting-started) as the basic testing framework in addition to using various utilities. CodeceptJS provides significant flexibility to test API calls as well browser based interaction if needed.

> NodeJS version 20+ is recommended

## Install Project dependencies

- Run: `$ npm ci`
- Copy `config-data.yml.example` via `$ cp config-data.yml.example config-data.yml`
  - Fill out empty data fields
- Install Playwright if needed `npx playwright install --with-deps`

## Run Tests

- Run file with tests: `npx codeceptjs run ./tests/users_test.ts`
- Run specific test by tag: `npx codeceptjs run --grep @users-api-test-1`
- Run specific tests and print all steps and details in test run: `npx codeceptjs run --grep @users-api-test-1 --verbose`

See https://codecept.io/commands/#run