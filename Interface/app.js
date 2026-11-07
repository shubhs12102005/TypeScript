//! Interface
var add;
add = function (n1, n2) {
    return n1 + n2;
};
console.log(add(10, 20));
var Person = /** @class */ (function () {
    function Person(n) {
        this.name = n;
    }
    return Person;
}());
