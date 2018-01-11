/*
 * Aula de Variaveis TS x JS
 *

let message: string = "Hello World, Obi-Wan Kenobi.";
console.log(message);

let episode: number = 4;
console.log("This is episode " + 4);
episode += 1
console.log("Next episode is " + episode);

let favoriteDroid: string;
favoriteDroid = 'BB-8';
console.log("My favorite droid is " + favoriteDroid);

*
* Aula de Functions TS x JS
*

let isEnoughToMeatMF = function (parsecs: number) : boolean {
    return parsecs < 12
}

let distance = 11;
console.log(`Is ${distance} parsecs enough to beat Millenion Falcon? ${isEnoughToMeatMF(distance) ? 'YES' : 'NO'}`);

let call = (name: string) => console.log(`Do you copy, ${name}`);
call('R2');

function inc (speed: number, inc:number = 1) : number {
    return speed + inc;
}

console.log(`inc (5,1) = ${inc(5, 1)}`);
console.log(`inc (5) = ${inc(5)}`); */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
 * Aula de Classes e Interfaces TS x JS
 */
var Spacecraft = /** @class */ (function () {
    function Spacecraft(propulsor) {
        this.propulsor = propulsor;
    }
    Spacecraft.prototype.jumpIntoHyperSpace = function () {
        console.log("Entering hyperspace with " + this.propulsor);
    };
    return Spacecraft;
}());
var ship = new Spacecraft('hyperdrive');
ship.jumpIntoHyperSpace();
var MillenionFalcon = /** @class */ (function (_super) {
    __extends(MillenionFalcon, _super);
    function MillenionFalcon() {
        var _this = this;
        _this = _super.call(this, 'hiperdrive') || this,
            _this.cargoContainers = 2;
        return _this;
    }
    MillenionFalcon.prototype.jumpIntoHyperSpace = function () {
        if (Math.random() >= 0.5) {
            _super.prototype.jumpIntoHyperSpace.call(this);
        }
        else {
            console.log('Failed to jump into hyperspace');
        }
    };
    return MillenionFalcon;
}(Spacecraft));
var falcon = new MillenionFalcon();
falcon.jumpIntoHyperSpace();
var goodForTheJob = function (ship) { return ship.cargoContainers > 2; };
console.log("Is Falcon good for the job? " + (goodForTheJob(falcon) ? 'YES' : 'NO'));
