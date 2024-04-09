function ElectoroDevice (name, power) {
  this.name = name;
  this.power = power;
  this.included = true;
}

ElectoroDevice.prototype.on = function () {
  this.included = true;
  console.log (`${this.name} включен`);
}

ElectoroDevice.prototype.off = function () {
  this.included = false;
  console.log (`${this.name} выключен`);
}

function NewLamp (name, power, light) {
  ElectoroDevice.call (this, name, power)
  this.light = light;
}

NewLamp.prototype = Object.create(ElectoroDevice.prototype);
NewLamp.prototype.constructor = NewLamp;


function NewComputer (name, power, model) {
  ElectoroDevice.call (this, name, power)
  this.model = model;
}

NewComputer.prototype = Object.create(ElectoroDevice.prototype);
NewComputer.prototype.constructor = NewComputer;

function SummPower(devices) {
  let newPower = 0;
  for (const device of devices) {
    if (device.included) {
      newPower += device.power;
    }
  }
  return newPower;
}

const lamp = new ElectoroDevice ('Настольаня ламра', 50, 'Дневной свет');
let computer = new ElectoroDevice ('Компьютер', 350, 'HP');

lamp.on();
computer.on();

lamp.off();
computer.off();


const newPower = SummPower([lamp, computer]);
console.log(`Суммарная мощность приборов: ${newPower} Вт`);

