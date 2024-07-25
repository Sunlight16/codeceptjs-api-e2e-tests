const { I } = inject();
import { configData } from "../../../config/config-data";
import { getBaseUrl } from "../../helpers/urls";

async function userLogin(userData: any) {
    const url = `${getBaseUrl()}/users/login`;
    const headers = {
        'Content-Type': 'application/json'
    }
    const response = await I.sendPostRequest(url, userData, headers);
    return response;
}

export = {
    userLogin,
}

