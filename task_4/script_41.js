import {device, lamp, laptop, washer, boiler, deviceSet} from './proto_41.js';

const lamp1 = device.create(lamp, {kind: 'Lamp', power: 10, model: 'LED'});
const lamp2 = device.create(lamp, {kind: 'Lamp', power: 20, model: 'LED'});
const lamp3 = device.create(lamp, {kind: 'Lamp', power: 100, model: 'Inc'});

const laptop1 = device.create(laptop, {kind: 'Laptop', power: 150, model: 'Apple'});
const laptop2 = device.create(laptop, {kind: 'Laptop', power: 200, model: 'Lenovo'});

const washer1 = device.create(washer, {kind: 'Washer', power: 2000, model: 'Indesit'});
washer1.setCapacity(7);

const boiler1 = device.create(boiler, {kind: 'Boiler', power: 2500, model: 'Ariston'});
boiler1.setVolume(250);


const devices = Object.create(deviceSet);
devices.add(lamp1);
devices.add(lamp2);
devices.add(lamp3);
devices.add(laptop1);
devices.add(laptop2);
devices.add(washer1);
devices.add(boiler1);

const lamps = Object.create(deviceSet);
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
boiler1.switchOn();

logTotalInputPower(devices);

// уходя - гасите свет!
logCommand('SwitchOff');
devices.switchOff();

logTotalInputPower(devices);
