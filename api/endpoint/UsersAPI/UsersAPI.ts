const { I } = inject();
import { configData } from "../../../config/config-data";
import { getBaseUrl } from "../../helpers/urls";

var headers = {
    'Content-Type': 'application/json'
}

// POST https://thinking-tester-contact-list.herokuapp.com/users

async function createUser(userData: any){
    const url = `${getBaseUrl()}/users`;
   
    const response = await I.sendPostRequest(url, userData, headers);
    return response;

}

//POST https://thinking-tester-contact-list.herokuapp.com/users/login

async function userLogin(userData: any) {
    const url = `${getBaseUrl()}/users/login`;

    const response = await I.sendPostRequest(url, userData, headers);
    return response;
}

//GET https://thinking-tester-contact-list.herokuapp.com/users/me

async function getUser(authHeader: any) {
    const url = `${getBaseUrl()}/users/me`;
    const response = await I.sendGetRequest(url, authHeader);
    return response;
}

export = {
    createUser,
    userLogin,
    getUser,
}

