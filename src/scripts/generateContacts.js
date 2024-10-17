import { createFakeContact } from '../utils/createFakeContact.js';
// import { PATH_DB } from '../constants/contacts.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
// import fs from 'node:fs/promises';

export const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();
    const newContacts = Array(number).fill(0).map(createFakeContact);
    const resultContacts = [...contacts, ...newContacts];
    await writeContacts(resultContacts);
  } catch (error) {
    console.log('Помилка:', error);
  }
};

generateContacts(5);

// export const generateContacts = async (number) => {
//   let contact = [];
//   for (let i = 0; i < number; i++) {
//     contact.push(createFakeContact());
//   }
//   try {
//     const dbData = await fs.readFile(PATH_DB, 'utf8');
//     const dbContact = JSON.parse(dbData);
//     dbContact.push(...contact);
//     await fs.writeFile(PATH_DB, JSON.stringify(dbContact));
//     console.log(`${number} contacts generated and added to db.json`);
//   } catch (error) {
//     console.log('Помилка:', error);
//   }
// };

// generateContacts(5);
