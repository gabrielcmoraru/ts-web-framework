import { User } from './models/Users';

const user = new User({ id: 2 });
console.log(user.get('id'));
user.on('change', () => {
  console.log('change triggered'))
user.trigger('change')
