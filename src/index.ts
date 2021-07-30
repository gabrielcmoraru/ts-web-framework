import { User } from './models/Users';

const user = new User({ name: 'bobs', age: 31 });

user.on('change', () => {
  console.log('ch 1');
});
user.on('change', () => {
  console.log('ch 2');
});
user.on('asd', () => {
  console.log('asd');
});

user.trigger('change');
user.trigger('asd');

user.set({ name: 'Adri' });
console.log(user.get('name'));
console.log(user.get('age'));
console.log(user);
