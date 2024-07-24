/// <reference types='codeceptjs' />
type steps_file = typeof import('./global_steps/global-steps_file');
type loginApi = typeof import('./api/UsersAPI/LoginAPI');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, loginApi: loginApi }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
