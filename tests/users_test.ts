import { configData } from "../config/config-data";
const randomEmail = require('random-email');
Feature('Users API');

 

Scenario('Add user, fetch new user, and login', async ({ I, usersApi }) => {
    I.say('Create new User', 'yellow');
    const userData = {
        firstName: 'Test',
        lastName: 'API User',
        email: randomEmail(),
        password: configData.user_login.user_password
    };

    I.say('Fetch newly created user', 'yellow');


    I.say('User logs-in', 'yellow');
    

    const userLoginResponse = await usersApi.userLogin(userData);
    I.showJson(userLoginResponse.data);
    I.assertExpectedResponseCode(userLoginResponse.data, userLoginResponse.status, [200], 'Validate response code');
    I.assertEqual(userLoginResponse.data.user.email, configData.user_login.user_email, 'This is correct user');



}).tag('users-api-test-1');
