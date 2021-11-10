import { GigyaLang } from './gigya-lang';
import { GigyaGlobalConf } from './gigya-global-conf';

export type GigyaScriptParams = {
  APIKey: string;
  protocol: string;
  baseDomain: string;
  URLParams: any;
  lang: GigyaLang;
  globalConf: GigyaGlobalConf;
  scriptElement: HTMLScriptElement;
};
