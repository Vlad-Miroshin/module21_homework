import {Device, Lamp, Laptop, Washer, Boiler, DeviceSet} from './proto_42.js';

const lamp1 = new Lamp();
const lamp2 = new Lamp(20);
const lamp3 = new Lamp(100, 'Inc');

const laptop1 = new Laptop(200, 'Lenovo');
const laptop2 = new Laptop(150, 'Apple');

const devices = new DeviceSet();
devices.add(lamp1);
devices.add(lamp2);
devices.add(lamp3);
devices.add(laptop1);
devices.add(laptop2);
devices.add(new Washer());
const boiler = devices.add(new Boiler(300));

const lamps = new DeviceSet();
lamps.add(lamp1);
lamps.add(lamp2);
lamps.add(lamp3);



function logTotalInputPower(devices) {
    console.log(`Total input power is ${devices.getInputPower()} wt`);
}

function logCommand(command) {
    console.log(`Command: ${command}`);
}

// список всех устройств
console.log(`Devices [${devices.getCount()}]: ${devices.toString()}`);

// включить все
logCommand('SwitchOn');
devices.switchOn();

logTotalInputPower(devices);

// выключить все
logCommand('SwitchOff');
devices.switchOff();

logTotalInputPower(devices);

// включить только лампочки
logCommand('SwitchOn(Lamps)');
lamps.switchOn();

logTotalInputPower(devices);

logCommand('SwitchOff');
devices.switchOff();

// включить бойлер
logCommand('SwitchOn(Boiler)');
boiler.switchOn();

logTotalInputPower(devices);

// уходя - гасите свет!
logCommand('SwitchOff');
devices.switchOff();

logTotalInputPower(devices);