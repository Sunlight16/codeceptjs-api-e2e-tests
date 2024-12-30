/// <reference types='codeceptjs' />
type steps_file = typeof import('./global_steps/global-steps_file');
type usersApi = typeof import('./api/endpoint/UsersAPI');
type contactsApi = typeof import('./api/endpoint/ContactsAPI');
type loginUserSessionService = typeof import('./api/service/LoginUserService');
type AssertHelper = import('./helpers/assert_helper');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, usersApi: usersApi, contactsApi: contactsApi, loginUserSessionService: loginUserSessionService }
  interface Methods extends Playwright, FileSystem, REST, AssertHelper {}
  interface I extends ReturnType<steps_file>, WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
