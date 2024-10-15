export {Device, Lamp, Laptop, Washer, Boiler, DeviceSet}

const STATE_ON = true;
const STATE_OFF = false;

function Device(power, model = '') {
    this._power = 0; // мощность, Ватт
    this._model = ''; // модель (производитель, тип и т.п.)
    this._state = STATE_OFF; // состояние вкл/выкл

    this.setPower = function(value) {
        if (typeof value !== 'number') 
            throw new Error("Value type must be 'number'");

        if (value < 0) 
            throw new Error("Value must be positive");

        this._power = value;
    }

    this.getPower = function() {
        return this._power;
    }    

    this.getModel = function() {
        return this._model;
    }

    this.setModel = function(value) {
        return this._model = value;
    }

    this.switchOn = function() {
        this._state = STATE_ON;
    }

    this.switchOff = function() {
        this._state = STATE_OFF;
    }

    this.isOn = function() {
        return this._state === STATE_ON;
    }

    this.getInputPower = function() {
        return this.isOn() ? this.getPower() : 0;
    }

    this.getSelfName = function() {
        return this.constructor.name;
    }

    this.toString = function() {
        if (this.getModel()) {
            return `${this.getSelfName()}('${this.getModel()}', ${this.getPower()}wt)`
        } else {
            return `${this.getSelfName()}(${this.getPower()}wt)`
        }
    }

    this.setPower(power);
    this.setModel(model);
}

function Lamp(power = 10, model = 'LED') {
    Device.call(this, power, model);
}

function Laptop(power = 200, model = 'Noname') {
    Device.call(this, power, model);
}

function Washer(power = 2000, model = '') {
    this._capacity = 4; // максимальная загрузка, кг

    Device.call(this, power, model);

    this.getCapacity = function() {
        return this._capacity;
    }

    this.setCapacity = function(value) {
        return this._capacity = value;
    }
}

function Boiler(volume = 100, power = 2500, model = '') {
    this._volume = 100; // объём, литров

    Device.call(this, power, model);

    this.getVolume = function() {
        return this._volume;
    }

    this.setVolume = function(value) {
        return this._volume = value;
    }

    this.setVolume(volume);
}

function DeviceSet() {
    this._items = [];

    this.add = function(device) {
        this._items.push(device);
        return device;
    }

    this.getCount = function() {
        return this._items.length;
    }

    this.isEmpty = function() {
        return this.getCount() === 0;
    }

    this.switchOn = function() {
        this._items.forEach(element => {
            element.switchOn()
        });
    }

    this.switchOff = function () {
        this._items.forEach(element => {
            element.switchOff()
        });
    }

    this.getInputPower = function() {
        return this._items.reduce(
            (sum, item) => sum + item.getInputPower()
            , 0
        );
    }

    this.toString = function() {
        const captions = this._items.map(item => item.toString());
        return captions.join(', ');
    }
}

