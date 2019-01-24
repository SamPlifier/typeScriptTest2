interface IEngine {
    start(callback: (startStatus: boolean, engineType: string) => void): void;
    stop(callback: (stopStatus: boolean, engineType: string) => void): void;
}

class Engine implements IEngine {
    constructor(public horsePower: number, public engineType: string) { }

    start(callback: (startStatus: boolean, engineType: string) => void) {
        window.setTimeout(() => {
            callback(true, this.engineType);
        }, 1000);
    }

    stop(callback: (stopStatus: boolean, engineType: string) => void) {
        window.setTimeout(() => {
            callback(true, this.engineType);
        }, 1000);
    }
}
class CustomEngine implements IEngine {
    start(callback: (startStatus: boolean, engineType: string) => void) {
        window.setTimeout(() => {
            callback(true, 'Custom engine');
        }, 1000);
    }

    stop(callback: (stopStatus: boolean, engineType: string) => void) {
        window.setTimeout(() => {
            callback(true, 'Custom engine');
        }, 1000);
    }
}
class Accessory {
    constructor(public accessoryNumber: number, public title: string) { }
}

class Auto {
    private _basePrice: number;
    private _engine: IEngine;
    state?: string;
    make: string;
    model: string;
    accessoryList: string;
    year?: number;

    constructor(basePrice: number, engine: IEngine, make: string, model: string, year?: number, state?: string) {
        this.engine = engine;
        this.basePrice = basePrice;
        this.make = make;
        this.model = model;
        this.year = year;
        this.state = state;
    }

    calculateTotal(): number {
        var taxRate = .08;
        return this.basePrice + (taxRate * this.basePrice);
    }

    addAccessories(...accessories: Accessory[]) {
        this.accessoryList = '';
        for (var i = 0; i < accessories.length; i++) {
            var ac = accessories[i];
            this.accessoryList += ac.accessoryNumber + ' ' + ac.title + '<br />';
        }
    }

    getAccessoryList(): string {
        return this.accessoryList;
    }

    get basePrice(): number {
        return this._basePrice;
    }

    set basePrice(value: number) {
        if (value <= 0) throw 'price must be >= 0';
        this._basePrice = value;
    }

    get engine(): IEngine {
        return this._engine;
    }

    set engine(value: IEngine) {
        if (value == undefined) throw 'Please supply an engine.';
        this._engine = value;
    }
}

class Truck extends Auto {
    bedLength: string;
    fourByFour: boolean;

    constructor(basePrice: number, engine: Engine, make: string, model: string, bedLength: string, fourByFour: boolean) {
        super(basePrice, engine, make, model);
        this.bedLength = bedLength;
        this.fourByFour = fourByFour;
    }
}

window.onload = function() {
    // var truck = new Truck(40000, new Engine(380, 'V10'), 'Chevy', 'Silverado', 'Long Bed', true);
    // console.log(truck.engine.engineType);
    // console.log(truck.calculateTotal());
    // truck.addAccessories(new Accessory(1, 'Sunroof'), new Accessory(2, 'Tinted Windows'), new Accessory(2, 'Towing Package'));
    // truck.engine.start((status: boolean, engineType: string) => {
    //     console.log(`${engineType} was started.`);
    // });
    var auto = new Auto(40000, new Engine(200, 'V6'), 'MakeA', 'ModelA', 2019, 'NC');
    var myEngine = <Engine>auto.engine;
    alert(myEngine.horsePower.toString());

};
