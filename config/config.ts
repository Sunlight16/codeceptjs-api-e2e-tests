import yaml from 'js-yaml';
import fs from 'fs';

interface ConfigGeneral {
  app_url: string;
  user_login: UserLogin;
}

interface UserLogin{
    user_email: string;
    user_password: string;
}

export const confMain = yaml.load(fs.readFileSync('confi-main.yml', 'utf8')) as ConfigGeneral;