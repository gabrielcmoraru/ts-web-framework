import { User } from './models/Users';

const user = new User({ id: 2 });
user.set({ age: 999 });
user.save();

// user.fetch();

// setTimeout(() => {
//   console.log(user);
// }, 2000);
