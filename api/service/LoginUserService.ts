import { AuthToken } from "../util/AuthToken";
const { I, usersApi } = inject();

/**
* 
* @returns {Promise<AuthToken>}
*/
async function authenticateUser(body = {}): Promise<AuthToken> {
    const response = await usersApi.userLogin(body);
    I.assertExpectedResponseCode(response.data, response.status, [200], 'Login user error!');
    const payload = response.data;
    I.assertNotEmpty(payload.token, 'No auth token was returned!');
    return {
        authToken: payload.token
    }
}

export = {
    authenticateUser
}