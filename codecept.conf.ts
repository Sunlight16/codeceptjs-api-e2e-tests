import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './tests/*_test.ts',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'http://localhost',
      show: false
    },
    FileSystem: {},
    REST: {},
    AssertHelper: {
      require: './helpers/assert_helper.ts'
    }
  },
  include: {
    I: './global_steps/global-steps_file.ts',
    usersApi: './api/endpoint/UsersAPI.ts',
  },
  name: 'codeceptjs-api-e2e-tests'
}