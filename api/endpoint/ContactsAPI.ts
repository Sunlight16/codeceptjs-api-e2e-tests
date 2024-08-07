const { I } = inject();
import { getBaseUrl } from "../helpers/urls";

function getFrontendHeaders(authHeader: any) {
    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authHeader}`,
    };
}

// POST https://thinking-tester-contact-list.herokuapp.com/contacts

async function createContact(contactData: any, authToken: any) {
    const url = `${getBaseUrl()}/contacts`;
    const response = await I.sendPostRequest(url, contactData, getFrontendHeaders(authToken));
    return response;
}

// GET https://thinking-tester-contact-list.herokuapp.com/contacts

async function fetchContactsList(authToken: any) {
    const url = `${getBaseUrl()}/contacts`;
    const response = await I.sendGetRequest(url, getFrontendHeaders(authToken));
    return response;
}

// GET https://thinking-tester-contact-list.herokuapp.com/contacts/{contactID}

async function fetchSingleContact(contactId: any, authToken: any) {
    const url = `${getBaseUrl()}/contacts/${contactId}`;
    const response = await I.sendGetRequest(url, getFrontendHeaders(authToken));
    return response;
}

// PUT https://thinking-tester-contact-list.herokuapp.com/contacts/{contactID}

async function updateContact(contactId: any, contactData: any, authToken: any) {
    const url = `${getBaseUrl()}/contacts/${contactId}`;
    const response = await I.sendPutRequest(url, contactData, getFrontendHeaders(authToken));
    return response;
}

// PATCH https://thinking-tester-contact-list.herokuapp.com/contacts/{contactID}

async function updateContactSingleProperty(contactId: any, contactData: any, authToken: any) {
    const url = `${getBaseUrl()}/contacts/${contactId}`;
    const response = await I.sendPatchRequest(url, contactData, getFrontendHeaders(authToken));
    return response;
}

// DELETE https://thinking-tester-contact-list.herokuapp.com/contacts/{contactID}

async function deleteContact(contactId: any, authToken: any) {
    const url = `${getBaseUrl()}/contacts/${contactId}`;
    const response = await I.sendDeleteRequest(url, getFrontendHeaders(authToken));
    return response;
}

export = {
    createContact,
    fetchContactsList,
    fetchSingleContact,
    updateContact,
    updateContactSingleProperty,
    deleteContact
}