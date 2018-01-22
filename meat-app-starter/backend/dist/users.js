"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return another !== undefined && another.email === this.email && another.password === this.password;
    };
    return User;
}());
exports.User = User;
exports.users = {
    "elias@gmail.com": new User('elias@gmail.com', 'Elias', 'elias25'),
    "priscila@gmail.com": new User('priscila@gmail.com', 'Priscila', 'priscila29')
};
