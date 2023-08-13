const fs = require('fs');
const path = require('path');

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
        return `Contact with ID ${contactId} removed.`; // Dodaj tę linię
    } catch (error) {
        console.error('Error removing contact:', error);
        return null;
    }
}


function addContact(name, email, phone) {
    try {


        const newContact = { id: Date.now().toString(), name, email, phone }
        contacts.push(newContact)
        fs.writeFileSync(contactsPath, JSON.stringify(contacts, null, 2))

        return newContact
    } catch (error) {
        console.error('Error adding contact:', error)
        return null
    }
}

module.exports = { listContacts, getContactById, removeContact, addContact };
