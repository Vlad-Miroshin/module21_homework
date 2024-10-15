export {device, lamp, laptop, washer, boiler, deviceSet}

const STATE_ON = true;
const STATE_OFF = false;

const device = {
    _kind: '', // тип устройства
    _power: 0, // мощность, Ватт
    _model: '', // модель (производитель, тип и т.п.)
    _state: STATE_OFF, // состояние вкл/выкл

    create(prototype, {kind = 'Device', power = 0, model = ''}) {
        const obj = Object.create(prototype);
        obj.set({kind, power, model});

        return obj;
    },

    set({kind = 'Device', power = 0, model = ''}) {
        this.setKind(kind);
        this.setPower(power);
        this.setModel(model);
    },

    setKind(value) {
        if (typeof value !== 'string') {
            console.log(value);

            throw new Error("Value type must be 'string'");
        }

        this._kind = value;
    },

    getKind() {
        return this._kind;
    },

    setPower(value) {
        if (typeof value !== 'number') 
            throw new Error("Value type must be 'number'");

        if (value < 0) 
            throw new Error("Value must be positive");

        this._power = value;
    },

    getPower() {
        return this._power;
    },

    getModel() {
        return this._model;
    },

    setModel(value) {
        return this._model = value;
    },

    switchOn() {
        this._state = STATE_ON;
    },

    switchOff() {
        this._state = STATE_OFF;
    },

    isOn() {
        return this._state === STATE_ON;
    },

    getInputPower() {
        return this.isOn() ? this.getPower() : 0;
    },

    toString() {
        const keys = Object.getOwnPropertyNames(this);
        const props = [];

        keys.forEach(
            (key) => props.push(`${key}: ${this[key]}`)
        );

        return `Device(${props.join(', ')})`;
    }

}

const lamp = {
    __proto__: device,
}

const laptop = {
    __proto__: device,
}

const washer = {
    __proto__: device,
    _capacity : 4, // максимальная загрузка, кг

    getCapacity() {
        return this._capacity;
    },

    setCapacity(value) {
        return this._capacity = value;
    }
}

const boiler = {
    __proto__: device,
    _volume: 100, // объём, литров

    getVolume() {
        return this._volume;
    },

    setVolume(value) {
        return this._volume = value;
    }
}

const deviceSet = {

    getItems() {
        if (this._items === undefined)
            this._items = [];

        return this._items;
    },

    add(device) {
        this.getItems().push(device);
        return device;
    },

    getCount() {
        return this.getItems().length;
    },

    isEmpty() {
        return this.getCount() === 0;
    },

    switchOn() {
        this.getItems().forEach(element => {
            element.switchOn()
        });
    },

    switchOff() {
        this.getItems().forEach(element => {
            element.switchOff()
        });
    },

    getInputPower() {
        return this.getItems().reduce(
            (sum, item) => sum + item.getInputPower()
            , 0
        );
    },

    toString() {
        const captions = this.getItems().map(item => item.toString());
        return captions.join(', ');
    }
}
