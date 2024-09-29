import { PATH_DB } from '../constants/constants.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
  try {
    const date = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(date);
    return contacts;
  } catch (error) {
    console.log(error);
  }
};
