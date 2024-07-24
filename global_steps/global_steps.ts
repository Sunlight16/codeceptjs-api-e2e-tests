export = function () {
    return actor({

        /**
         *
         * @param jsonPayload
         * @param msg - supply a message prefix
         * @param expand - expand Json. default to false, use `EXPAND_JSON=true npx codeceptjs run` to activate
         */
        showJson(jsonPayload: any, msg: string = '', expand = process.env.EXPAND_JSON) {
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