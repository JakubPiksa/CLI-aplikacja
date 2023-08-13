const { Command } = require('commander');
const { listContacts, getContactById, removeContact, addContact } = require('./contacts');

const program = new Command();

program
  .command('list')
  .description('List all contacts')
  .action(() => {
    const contacts = listContacts();
    console.table(contacts);
  });

program
  .command('get <id>')
  .description('Get contact by ID')
  .action((id) => {
    const contact = getContactById(id);
    console.log(contact);
  });

program
  .command('add')
  .description('Add a new contact')
  .requiredOption('-n, --name <name>', 'Contact name')
  .requiredOption('-e, --email <email>', 'Contact email')
  .requiredOption('-p, --phone <phone>', 'Contact phone')
  .action((options) => {
    const { name, email, phone } = options;
    addContact(name, email, phone);
  });

program
  .command('remove <id>')
  .description('Remove contact by ID')
  .action((id) => {
    removeContact(id);
  });

program.parse(process.argv);
