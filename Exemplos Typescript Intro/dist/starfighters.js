"use strict";
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
exports.__esModule = true;
var base_ships_1 = require("./base-ships");
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
}(base_ships_1.Spacecraft));
exports.MillenionFalcon = MillenionFalcon;
