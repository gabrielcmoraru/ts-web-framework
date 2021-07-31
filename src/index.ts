import { User } from './models/Users';
import { UserForm } from './views/UserForm';

const user = User.buildUser({ age: 333, name: 'NAME' });
const root = document.getElementById('root');

if (root) {
  const userForm = new UserForm(root, user);

  userForm.render();
} else {
  throw new Error('Root element not found');
}

// const collection = User.buildUserCollection();
// collection.on('change', () => {
//   return console.log('change', collection);
// });
// collection.fetch();

// user.on('change', () => {
//   console.log('change', user);
// });

// user.on('save', () => {
//   console.log('save', user);
// });

// user.save();
