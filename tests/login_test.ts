const {loginApi} = inject();
import { configMain } from "../config/config";

Feature('Users action');

Scenario('Loged-in user fetches Contacts list', ({ I }) => {
    I.say('User logs-in');
    const userData = {
        email: configMain.user_login.user_email,
        password: secret(configMain.user_login.user_password)
    };

    const userLogin = await loginApi.userLogin(userData);

});
