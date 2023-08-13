import fs from 'fs';
import path from 'path';

const contactsPath = path.join(__dirname, 'db', 'contacts.json');

const contactsData = fs.readFileSync(contactsPath, 'utf-8');
const contacts = JSON.parse(contactsData);

function listContacts() {

  return contacts;
}

function getContactById(contactId) {
  const contact = contacts.find((c) => c.id === contactId);

  return contact;
}

function removeContact(contactId) {
  try {
    const updatedContacts = contacts.filter((c) => c.id !== contactId);
    fs.writeFileSync(contactsPath, JSON.stringify(updatedContacts, null, 2));
    console.log(`Contact with ID ${contactId} removed.`);

  } catch (error) {
    console.error('Error reading or writing contacts:', error);
  }
}

function addContact(name, email, phone) {
  try {
    const newContact = {
      id: generateId(),
      name,
      email,
      phone,
    };

    const updatedContacts = [...contacts, newContact];

    fs.writeFileSync(contactsPath, JSON.stringify(updatedContacts, null, 2));
    console.log('New contact added:', newContact);
    
  } catch (error) {
    console.error('Error reading or writing contacts:', error);
  }
}

module.exports = { listContacts, getContactById, removeContact, addContact };
