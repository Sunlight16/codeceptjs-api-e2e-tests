/// <reference types='codeceptjs' />
type steps_file = typeof import('./global_steps/global-steps_file');
type loginApi = typeof import('./api/endpoint/UsersAPI/LoginAPI');
type AssertHelper = import('./helpers/assert_helper');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, loginApi: loginApi }
  interface Methods extends Playwright, FileSystem, REST, AssertHelper {}
  interface I extends ReturnType<steps_file>, WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
