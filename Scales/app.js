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
var Product = /** @class */ (function () {
    function Product(_name, _scale) {
        this.name = _name;
        this.scale = _scale;
    }
    Product.prototype.getScale = function () {
        return this.scale;
    };
    ;
    Product.prototype.getName = function () {
        return this.name;
    };
    ;
    return Product;
}());
;
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(_name, _scale) {
        return _super.call(this, 'Apple ' + _name, _scale) || this;
    }
    return Apple;
}(Product));
;
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato(_name, _scale) {
        return _super.call(this, 'Tomato ' + _name, _scale) || this;
    }
    return Tomato;
}(Product));
;
var Scales = /** @class */ (function () {
    function Scales() {
        this.nameList = [];
    }
    ;
    Scales.prototype.add = function (prod) {
        this.nameList.push(prod);
    };
    ;
    Scales.prototype.getSumScale = function () {
        var sum = 0;
        this.nameList.forEach(function (v) {
            sum += v.getScale();
        });
        return sum;
    };
    ;
    Scales.prototype.getNameList = function () {
        var list = [];
        this.nameList.forEach(function (v) {
            list.push(v.getName());
        });
        return list;
    };
    ;
    return Scales;
}());
;
var scales = new Scales;
var app1 = new Apple('green', 200);
scales.add(app1);
var tom1 = new Tomato('Italian', 150);
scales.add(tom1);
var app2 = new Apple('red', 340);
scales.add(app2);
var tom2 = new Tomato('Turkish', 410);
scales.add(tom2);
console.log(scales.getNameList(), scales.getSumScale());
var app3 = new Apple('yellow', 125);
scales.add(app3);
var tom3 = new Tomato('Belarusian', 794);
scales.add(tom3);
console.log(scales.getNameList(), scales.getSumScale());
//# sourceMappingURL=app.js.map