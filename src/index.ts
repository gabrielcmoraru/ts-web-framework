import { User, UserProps } from './models/Users';
import { UserEdit } from './views/UserEdit';
import { UserList } from './views/UserList';
import { Collection } from './models/Collection';
import { db } from './globals';

const users = new Collection(db, (json: UserProps) => {
  return User.buildUser(json);
});

users.on('change', () => {
  const root = document.getElementById('root');
  if (root) {
    new UserList(root, users).render();
  }
});

users.fetch();

// const user = User.buildUser({ age: 333, name: 'NAME' });
// const root = document.getElementById('root');

// if (root) {
//   const userEdit = new UserEdit(root, user);

//   userEdit.render();
//   console.log(userEdit);
// } else {
//   throw new Error('Root element not found');
// }

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
