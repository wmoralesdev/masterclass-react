// interface Person {
//     name: string
// }
// interface HasEmail extends Person {
//     email: string
// }
// interface HasPhone extends Person {
//     phone: number
// }
// // Overloading -> Signature overloading
// function contactPerson(p: Person, email: string): HasEmail;
// function contactPerson(p: Person, phone: number): HasPhone;
// function contactPerson(p: Person, contact: number | string): HasEmail | HasPhone {
//     if(type == "email" && typeof(contact) == "number")
//         return { name: p.name, email: contact }
//     else
//         return { name: p.name, phone: contact }
// }
// string literal types
const x = "Hello World!";
console.log(typeof (x));
