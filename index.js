const yargs = require('yargs');
const { listContacts, getContactById, removeContact, addContact } = require('./contacts');

const argv = yargs
  .command('list', 'List all contacts')
  .command('get', 'Get contact by ID', {
    id: {
      describe: 'Contact ID',
      demandOption: true,
      type: 'string',
    },
  })
  .command('add', 'Add a new contact', {
    name: {
      describe: 'Contact name',
      demandOption: true,
      type: 'string',
    },
    email: {
      describe: 'Contact email',
      demandOption: true,
      type: 'string',
    },
    phone: {
      describe: 'Contact phone',
      demandOption: true,
      type: 'string',
    },
  })
  .command('remove', 'Remove contact by ID', {
    id: {
      describe: 'Contact ID',
      demandOption: true,
      type: 'string',
    },
  })
  .help()
  .argv;

const action = argv._[0];

switch (action) {
  case 'list':
    const contacts = listContacts();
    console.table(contacts);
    break;

  case 'get':
    const contactId = argv.id;
    const contact = getContactById(contactId);
    console.log(contact);
    break;

  case 'add':
    const { name, email, phone } = argv;
    addContact(name, email, phone);
    break;

  case 'remove':
    const contactIdToRemove = argv.id;
    removeContact(contactIdToRemove);
    break;

  default:
    console.log('Unknown action type!');
}
