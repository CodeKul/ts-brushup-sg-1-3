"use strict";
exports.__esModule = true;
var Animal = /** @class */ (function () {
    function Animal() {
        this.legs = 10;
    }
    Animal.prototype.run = function () {
        console.log("Animal is running");
    };
    return Animal;
}());
exports.Animal = Animal;
