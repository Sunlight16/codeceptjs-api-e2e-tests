import { configData } from "../config/config-data";
const randomEmail = require('random-email');
Feature('Users API');



Scenario('CRUD Users', async ({ I, usersApi }) => {

    I.say('Create new User', 'yellow');
    let userEmail = randomEmail();
    const userData = {
        firstName: 'Test User',
        lastName: 'API User',
        email: userEmail,
        password: configData.user_login.user_password
    };
    const createUserResponse = await usersApi.createUser(userData);
    I.assertExpectedResponseCode(createUserResponse.data, createUserResponse.status, [201], 'Validate createUser response code')
    I.showJson(createUserResponse.data);
    I.assertEqual(createUserResponse.data.user.email, userEmail, 'Validate user email in response');

    I.say('Fetch newly created user', 'yellow');
    let token = createUserResponse.data.token;
    const fetchNewUserResposne = await usersApi.getUser(token);
    I.assertExpectedResponseCode(fetchNewUserResposne.data, fetchNewUserResposne.status, [200], 'Validate createUser response code')
    I.showJson(fetchNewUserResposne.data);
    I.assertEqual(fetchNewUserResposne.data._id, createUserResponse.data.user._id, 'New user ID matches in the fetched user response')

    I.say('Update user names', 'yellow');
    let updateUserData = {
        firstName: 'Updated Test User',
        lastName: 'Updated API User',
        email: userEmail,
        password: configData.user_login.user_password

    };
    const updateUserResponse = await usersApi.updateUser(token, updateUserData);
    I.assertExpectedResponseCode(updateUserResponse.data, updateUserResponse.status, [200], 'Validate userUpdate response code');
    I.showJson(updateUserResponse.data);
    I.assertEqual(updateUserResponse.data.firstName, updateUserData.firstName, 'User names successfully updated');

    I.say('Delete previously created user', 'yellow');
    const deleteUserResponse = await usersApi.deleteUser(token);
    I.assertExpectedResponseCode(deleteUserResponse.data, deleteUserResponse.status, [200], 'Validate userDelete response code');

}).tag('users-api-test-1');

Scenario('Login/Logout Users', async ({ I, usersApi }) => {
    
    I.say('User logs-in', 'yellow');
    let loginData = {
        email: configData.user_login.user_email,
        password: configData.user_login.user_password
    }
    const userLogInResponse = await usersApi.userLogin(loginData);
    I.assertExpectedResponseCode(userLogInResponse.data, userLogInResponse.status, [200], 'Validate userLogIn response code');
    I.showJson(userLogInResponse.data);
    I.assertEqual(userLogInResponse.data.user.email, configData.user_login.user_email, 'New User successfully logged-in');


    I.say('User logs-out', 'yellow');
    let token = userLogInResponse.data.token;
    const userLogOutResponse = await usersApi.userLogOut(token);
    I.assertExpectedResponseCode(userLogOutResponse.data, userLogOutResponse.status, [200], 'Validate userLogOut response code');

}).tag('users-api-test-2');