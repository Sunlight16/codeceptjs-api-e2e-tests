import { AuthToken } from "../api/util/AuthToken";
import { configData } from "../config/config-data";
import {
    userContact1,
    userContact2
} from '../data/contactData';

Feature('Contacts API');

let authToken_contact: AuthToken;
const loginData = {
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
    const createContactResponse = await contactsApi.createContact(userContact1, authToken_contact);
    I.assertExpectedResponseCode(createContactResponse.data, createContactResponse.status, [201], 'Validate createContact response code.')
    I.showJson(createContactResponse.data);
    I.assertEqual(createContactResponse.data.email, userContact1.email, 'Validate created contact email in response.');

    I.say('Fetch newly created contact', 'yellow');
    let currentContactId = createContactResponse.data._id;
    const fetchContact = await contactsApi.fetchSingleContact(currentContactId, authToken_contact);
    I.assertExpectedResponseCode(fetchContact.data, fetchContact.status, [200], 'Validate fetchSingleContact response code.');
    I.showJson(fetchContact.data);
    I.assertEqual(fetchContact.data.email, userContact1.email, 'Validate fetched user contact has correct email.');

    I.say('Fetch all contacts', 'yellow');
    const fetchAllContacts = await contactsApi.fetchContactsList(authToken_contact);
    I.assertExpectedResponseCode(fetchAllContacts.data, fetchAllContacts.status, [200], 'Validate fetchContactsList response code.');
    I.showJson(fetchAllContacts.data);
    I.assertEqual(fetchAllContacts.data[0].email, userContact1.email, 'Validate fetched user contact has correct email.');

    I.say('Update newly created contact single data', 'yellow');
    let updatedContactSingleProperty = {
        email: userContact2.email
    };
    const updateContactSingleProperty = await contactsApi.updateContactSingleProperty(currentContactId, updatedContactSingleProperty, authToken_contact);
    I.assertExpectedResponseCode(updateContactSingleProperty.data, updateContactSingleProperty.status, [200], 'Validate updateContactSingleProperty response code.');
    I.showJson(updateContactSingleProperty.data);
    I.assertEqual(updateContactSingleProperty.data.email, userContact2.email, 'Validate fetched user contact has correct email.');

    I.say('Update newly created contact all data', 'yellow');
    let updatedContactData = {
        ...userContact2
    };
    const updateCotactAllData = await contactsApi.updateContact(currentContactId, updatedContactData, authToken_contact);
    I.assertExpectedResponseCode(updateCotactAllData.data, updateCotactAllData.status, [200], 'Validate updateContact response code.');
    I.showJson(updateCotactAllData.data);
    I.assertEqual(updateCotactAllData.data.email, userContact2.email, 'Validate fetched user contact has correct email.');

    I.say('Delete newly created contact', 'yellow');
    const deleteContact = await contactsApi.deleteContact(currentContactId, authToken_contact);
    I.assertExpectedResponseCode(deleteContact.data, deleteContact.status, [200], 'Validate deleteContact response code.');
    I.showJson(deleteContact.data);
    I.assertEqual(deleteContact.data, 'Contact deleted', 'Validate fetched user contact has correct email.');

}).tag('contact-api-test-1');