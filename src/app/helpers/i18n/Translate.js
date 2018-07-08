// @flow
import logger from 'helpers/logger';
import error from 'constants/messages/error';
import * as languages from './languages';

const DEFAULT_LANGUAGE = 'tr';

class Translate {
  data: Object;

  constructor(lang?: string = DEFAULT_LANGUAGE) {
    const data = languages[lang];
    if (!data) {
      logger.error(error.LANG_NOT_FOUND);
    }
    this.data = data;
  }

  getData(): Object {
    return this.data || {};
  }

  get(key: string): string {
    const data = this.getData();
    return data[key] || key;
  }
}

const T = new Translate();
export default T;
