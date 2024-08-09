import { AuthToken } from "../api/util/AuthToken";
import { configData } from "../config/config-data";
import {
    newContact
} from '../data/contactData';

Feature('Contacts API');

let authToken_contact: AuthToken;
let loginData = {
    email: configData.user_login.user_email,
    password: configData.user_login.user_password
};

Before(async ({ I, loginUserSessionService }) => {
    I.say('Login with user to obtain Auth Token');
    authToken_contact = await loginUserSessionService.authenticateUser(loginData);
    I.showJson(authToken_contact, 'User logged in successfully');
});

Scenario('CRUD Contacts', async ({ I, contactsApi }) => {
    I.say('Create new contact for logged in user', 'yellow');
    const createContactResponse = await contactsApi.createContact(newContact, authToken_contact);
    I.assertExpectedResponseCode(createContactResponse.data, createContactResponse.status, [201], 'Validate createContact response code.')
    I.showJson(createContactResponse.data);
    I.assertEqual(createContactResponse.data.email, newContact.email, 'Validate created contact email in response.');

}).tag('contact-api-test-1');