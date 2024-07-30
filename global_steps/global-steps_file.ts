/* 
 This part of the code was implemented by a Software Developer.
 This actor is used for showing response in JSON format.
*/
import { configData } from "../config/config-data";
export = function () {
    return actor({
        /**
         *
         * @param jsonPayload
         * @param msg - supply a message prefix
        * @param expand - expand Json.default to false, provide expand_json=true to expand
         */
        showJson(jsonPayload: any, msg: string = '', expand = configData.expand_json) {
            let fullMsg = "";
            if (msg) {
                fullMsg = `${msg}:\n`;
            }

            if ((expand == true) || expand === 'true') {
                fullMsg += JSON.stringify(jsonPayload, null, 2);
            } else {
                fullMsg += JSON.stringify(jsonPayload);
            }

            this.say(fullMsg);
        }
    });
}