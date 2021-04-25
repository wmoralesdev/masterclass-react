interface Person {
    name: string
}

interface HasEmail extends Person {
    email: string
}

interface HasPhone extends Person {
    phone: number
}

// Overloading -> Signature overloading

function contactPerson(p: Person, type: "email", email: string): HasEmail;
function contactPerson(p: Person, type: "phone", phone: number): HasPhone;

function contactPerson(p: Person, type: "email" | "phone", contact: string | number): HasEmail | HasPhone {
    if(type == "email")
        return { name: p.name, email: contact }
    else
        return { name: p.name, phone: contact }
}

var p: Person = { name: "Walter" }
contactPerson(p, "email", "walterrafaasdasda");
contactPerson(p, "phone", 1231312312);