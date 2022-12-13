// const person = {
//   name: 'Rusal',
//   age: 24
// }

// const ADMIN = 0;
// const READ_ONLY  = 1;
// const AUTHOR = 2;
enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
  name: 'Rusal',
  age: 24,
  hobbies: ['Sports', 'Cooking'],
  role: [1, 'author'],
  title: Role.ADMIN,
};

for (const hobby of person.hobbies) {
  console.log(hobby);
};