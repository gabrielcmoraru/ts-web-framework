import { User } from './models/Users';

const user = User.buildUser({ id: 1, name: 'bobs' });
user.on('change', () => {
  console.log('change', user);
});

user.on('save', () => {
  console.log('save', user);
});

user.save();
