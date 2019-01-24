var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Engine = /** @class */ (function () {
    function Engine(horsePower, engineType) {
        this.horsePower = horsePower;
        this.engineType = engineType;
    }
    Engine.prototype.start = function (callback) {
        var _this = this;
        window.setTimeout(function () {
            callback(true, _this.engineType);
        }, 1000);
    };
    Engine.prototype.stop = function (callback) {
        var _this = this;
        window.setTimeout(function () {
            callback(true, _this.engineType);
        }, 1000);
    };
    return Engine;
}());
var CustomEngine = /** @class */ (function () {
    function CustomEngine() {
    }
    CustomEngine.prototype.start = function (callback) {
        window.setTimeout(function () {
            callback(true, 'Custom engine');
        }, 1000);
    };
    CustomEngine.prototype.stop = function (callback) {
        window.setTimeout(function () {
            callback(true, 'Custom engine');
        }, 1000);
    };
    return CustomEngine;
}());
var Accessory = /** @class */ (function () {
    function Accessory(accessoryNumber, title) {
        this.accessoryNumber = accessoryNumber;
        this.title = title;
    }
    return Accessory;
}());
var Auto = /** @class */ (function () {
    function Auto(basePrice, engine, make, model, year, state) {
        this.engine = engine;
        this.basePrice = basePrice;
        this.make = make;
        this.model = model;
        this.year = year;
        this.state = state;
    }
    Auto.prototype.calculateTotal = function () {
        var taxRate = .08;
        return this.basePrice + (taxRate * this.basePrice);
    };
    Auto.prototype.addAccessories = function () {
        var accessories = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            accessories[_i] = arguments[_i];
        }
        this.accessoryList = '';
        for (var i = 0; i < accessories.length; i++) {
            var ac = accessories[i];
            this.accessoryList += ac.accessoryNumber + ' ' + ac.title + '<br />';
        }
    };
    Auto.prototype.getAccessoryList = function () {
        return this.accessoryList;
    };
    Object.defineProperty(Auto.prototype, "basePrice", {
        get: function () {
            return this._basePrice;
        },
        set: function (value) {
            if (value <= 0)
                throw 'price must be >= 0';
            this._basePrice = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Auto.prototype, "engine", {
        get: function () {
            return this._engine;
        },
        set: function (value) {
            if (value == undefined)
                throw 'Please supply an engine.';
            this._engine = value;
        },
        enumerable: true,
        configurable: true
    });
    return Auto;
}());
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(basePrice, engine, make, model, bedLength, fourByFour) {
        var _this = _super.call(this, basePrice, engine, make, model) || this;
        _this.bedLength = bedLength;
        _this.fourByFour = fourByFour;
        return _this;
    }
    return Truck;
}(Auto));
window.onload = function () {
    // var truck = new Truck(40000, new Engine(380, 'V10'), 'Chevy', 'Silverado', 'Long Bed', true);
    // console.log(truck.engine.engineType);
    // console.log(truck.calculateTotal());
    // truck.addAccessories(new Accessory(1, 'Sunroof'), new Accessory(2, 'Tinted Windows'), new Accessory(2, 'Towing Package'));
    // truck.engine.start((status: boolean, engineType: string) => {
    //     console.log(`${engineType} was started.`);
    // });
    var auto = new Auto(40000, new Engine(200, 'V6'), 'MakeA', 'ModelA', 2019, 'NC');
    var myEngine = auto.engine;
    alert(myEngine.horsePower.toString());
};
