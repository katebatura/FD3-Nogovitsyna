;
var Apple = /** @class */ (function () {
    function Apple(_name, _scale) {
        this.name = 'Apple ' + _name;
        this.scale = _scale;
    }
    Apple.prototype.getScale = function () {
        return this.scale;
    };
    ;
    Apple.prototype.getName = function () {
        return this.name;
    };
    ;
    return Apple;
}());
;
var Tomato = /** @class */ (function () {
    function Tomato(_name, _scale) {
        this.name = 'Tomato ' + _name;
        this.scale = _scale;
    }
    Tomato.prototype.getScale = function () {
        return this.scale;
    };
    ;
    Tomato.prototype.getName = function () {
        return this.name;
    };
    ;
    return Tomato;
}());
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