class ElectoroDevice {
    constructor(name, power) {
      this.name = name;
      this.power = power;
      this.included = true;
    }
  
    on() {
      this.included = true;
      console.log(`${this.name} включен`);
    }
  
    off() {
      this.included = false;
      console.log(`${this.name} выключен`);
    }
  }
  
  class NewLamp extends ElectoroDevice {
    constructor(name, power, light) {
      super(name, power);
      this.light = light;
    }
  }
  
  class NewComputer extends ElectoroDevice {
    constructor(name, power, model) {
      super(name, power);
      this.model = model;
    }
  }
  
  function SummPower(devices) {
    let newPower = 0;
    for (const device of devices) {
      if (device.included) {
        newPower += device.power;
      }
    }
    return newPower;
  }
  
  const lamp = new ElectoroDevice('Настольаня ламра', 50, 'Дневной свет');
  let computer = new ElectoroDevice('Компьютер', 350, 'HP');
  
  lamp.on();
  computer.on();
  
  lamp.off();
  computer.off();
  
  const newPower = SummPower([lamp, computer]);
  console.log(`Суммарная мощность приборов: ${newPower} Вт`);