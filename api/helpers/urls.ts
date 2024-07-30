import { configData } from "../../config/config-data"


function getBaseUrl(): string {
    return `https://${configData.app_url}`
}

export {
    getBaseUrl
}