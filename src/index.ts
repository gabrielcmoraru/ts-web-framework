import { User } from './models/Users';

const collection = User.buildUserCollection();
collection.on('change', () => {
  return console.log('change', collection);
});
collection.fetch();

// const user = User.buildUser({ id: 1, name: 'bobs' });
// user.on('change', () => {
//   console.log('change', user);
// });

// user.on('save', () => {
//   console.log('save', user);
// });

// user.save();
