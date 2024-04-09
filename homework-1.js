
let obj = {
    name: 'Sergey',
    age: 30,
    height: 175,
    city: 'Ulyanovsk'
}


function nameBio(obj) {
    for (let key in obj){
      console.log(`${key}: ${obj[key]}`)
        }
}

nameBio(obj)
