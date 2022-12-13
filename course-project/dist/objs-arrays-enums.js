"use strict";
// const person = {
//   name: 'Rusal',
//   age: 24
// }
// const ADMIN = 0;
// const READ_ONLY  = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
const person = {
    name: 'Rusal',
    age: 24,
    hobbies: ['Sports', 'Cooking'],
    role: [1, 'author'],
    title: Role.ADMIN,
};
for (const hobby of person.hobbies) {
    console.log(hobby);
}
;
