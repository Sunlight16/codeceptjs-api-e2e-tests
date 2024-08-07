const { I } = inject();
import { getBaseUrl } from "../helpers/urls";

var headers = {
    'Content-Type': 'application/json'
}

// POST https://thinking-tester-contact-list.herokuapp.com/users

async function createUser(userData: any) {
    const url = `${getBaseUrl()}/users`;
    const response = await I.sendPostRequest(url, userData, headers);
    return response;

}

//GET https://thinking-tester-contact-list.herokuapp.com/users/me

async function getUser(authHeader: any) {
    const url = `${getBaseUrl()}/users/me`;
    let headers = I.amBearerAuthenticated(secret(authHeader));
    const response = await I.sendGetRequest(url, headers);
    return response;
}

//POST https://thinking-tester-contact-list.herokuapp.com/users/login

async function userLogin(userData: any) {
    const url = `${getBaseUrl()}/users/login`;
    const response = await I.sendPostRequest(url, userData);
    return response;
}

//POST https://thinking-tester-contact-list.herokuapp.com/users/logout

async function userLogOut(authHeader: any) {
    const url = `${getBaseUrl()}/users/logout`;
    let headers = I.amBearerAuthenticated(secret(authHeader));
    const response = await I.sendPostRequest(url, headers);
    return response;
}

//PATCH https://thinking-tester-contact-list.herokuapp.com/users/me

async function updateUser(authHeader: any, userData: any) {
    const url = `${getBaseUrl()}/users/me`;
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authHeader}`,
    }
    const response = await I.sendPatchRequest(url, userData, headers);
    return response;
}

//DELETE https://thinking-tester-contact-list.herokuapp.com/users/me

async function deleteUser(authHeader: any) {
    const url = `${getBaseUrl()}/users/me`;
    let tokenHeader = I.amBearerAuthenticated(authHeader);
    const response = await I.sendDeleteRequest(url, tokenHeader);
    return response;
}

export = {
    createUser,
    getUser,
    userLogin,
    userLogOut,
    updateUser,
    deleteUser
}

