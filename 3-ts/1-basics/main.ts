interface Person {
    name: string
}

interface Student extends Person {
    college: string
}

var caderJoto: Student = {
    name: 'Cader',
    college: 'UCA'
}

function createStudent(name: string, college: string): Student {
    return {
        name: name,
        college: college
    }
}