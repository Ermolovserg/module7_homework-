function nameBio(obj, name) {
    return name in obj
}

let person = {
    name: 'Sergey',
    age: 30,
    height: 175,
    city: 'Ulyanovsk'
}

console.log(nameBio(person, 'age'))
console.log(nameBio(person, 'number'))
console.log(nameBio(person, 'height'))