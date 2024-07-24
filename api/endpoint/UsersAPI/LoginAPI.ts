const { I } = inject();
import { configMain } from "../../../config/config";
import { getBaseUrl } from "../../helpers/urls";

async function userLogin(userData: any) {
    const url = `${getBaseUrl()}/users/login`;
    const header = {
        'Authorization': `Bearer ${configMain.user_token}`,
    }
    const response = await I.sendPostRequest(url, userData, header);
    return response;
}

export ={
    userLogin,
}

