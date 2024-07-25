import yaml from 'js-yaml';
import fs from 'fs';

interface ConfigGeneral {
  app_url: string;
  expand_json: boolean;
  user_token: string;
  user_login: UserData;
}

interface UserData{
    user_email: string;
    user_password: string;
}

export const configData = yaml.load(fs.readFileSync('config-data.yml', 'utf8')) as ConfigGeneral;