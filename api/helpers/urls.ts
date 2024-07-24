import {configMain} from "../../config/config"


function getBaseUrl():string {
    return `https://${configMain.app_url}`
}

export {
    getBaseUrl
}