import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  const data = updatedContacts;
  try {
    await fs.writeFile(PATH_DB, data, 'utf8');
    console.log('Дані успішно записані у файл.');
  } catch (error) {
    console.log('Помилка запису у файл:', error);
  }
};
