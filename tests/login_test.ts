import { configData } from "../config/config-data";

Feature('Users action');

Scenario('Loged-in user fetches Contacts list', async ({ I, loginApi }) => {
    I.say('User logs-in', 'yellow');
    const userData = {
        email: configData.user_login.user_email,
        password: configData.user_login.user_password
    };

    const userLoginResponse = await loginApi.userLogin(userData);
    I.showJson(userLoginResponse.data);
    I.assertExpectedResponseCode(userLoginResponse.data, userLoginResponse.status, [200], 'Validate response code');
    I.assertEqual(userLoginResponse.data.user.email, configData.user_login.user_email, 'This is correct user');

    //TO DO fetch Contacts list

}).tag('users-api-test-1');
