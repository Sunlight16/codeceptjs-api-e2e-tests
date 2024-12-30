const { I } = inject();
import { Contact } from "../../data/contactData";
import { getBaseUrl } from "../helpers/urls";
import { AuthToken } from "../util/AuthToken";

function getGeneralHeaders(authHeader: AuthToken) {
    return {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authHeader.authToken}`,
    };
}

// POST https://thinking-tester-contact-list.herokuapp.com/contacts

async function createContact(contactData: Contact, authToken: AuthToken) {
    const url = `${getBaseUrl()}/contacts`;
    const response = await I.sendPostRequest(url, contactData, getGeneralHeaders(authToken));
    return response;
}

// GET https://thinking-tester-contact-list.herokuapp.com/contacts

async function fetchContactsList(authToken: AuthToken) {
    const url = `${getBaseUrl()}/contacts`;
    const response = await I.sendGetRequest(url, getGeneralHeaders(authToken));
    return response;
}

// GET https://thinking-tester-contact-list.herokuapp.com/contacts/{contactID}

async function fetchSingleContact(contactId: any, authToken: AuthToken) {
    const url = `${getBaseUrl()}/contacts/${contactId}`;
    const response = await I.sendGetRequest(url, getGeneralHeaders(authToken));
    return response;
}

// PUT https://thinking-tester-contact-list.herokuapp.com/contacts/{contactID}

async function updateContact(contactId: any, contactData: any, authToken: AuthToken) {
    const url = `${getBaseUrl()}/contacts/${contactId}`;
    const response = await I.sendPutRequest(url, contactData, getGeneralHeaders(authToken));
    return response;
}

// PATCH https://thinking-tester-contact-list.herokuapp.com/contacts/{contactID}

async function updateContactSingleProperty(contactId: any, contactData: any, authToken: AuthToken) {
    const url = `${getBaseUrl()}/contacts/${contactId}`;
    const response = await I.sendPatchRequest(url, contactData, getGeneralHeaders(authToken));
    return response;
}

// DELETE https://thinking-tester-contact-list.herokuapp.com/contacts/{contactID}

async function deleteContact(contactId: any, authToken: AuthToken) {
    const url = `${getBaseUrl()}/contacts/${contactId}`;
    const response = await I.sendDeleteRequest(url, getGeneralHeaders(authToken));
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