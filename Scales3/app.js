;
var Scales = /** @class */ (function () {
    function Scales() {
    }
    ;
    Scales.prototype.create = function (_storage) {
        this.storage = _storage;
    };
    Scales.prototype.add = function (item) {
        this.storage.addItem(item);
    };
    ;
    Scales.prototype.getNameList = function () {
        return this.storage.getItems();
    };
    ;
    Scales.prototype.getSumScale = function () {
        return this.storage.getCount();
    };
    ;
    return Scales;
}());
;
var ScalesStorageEngineArray = /** @class */ (function () {
    function ScalesStorageEngineArray() {
        this.nameList = [];
    }
    ;
    ScalesStorageEngineArray.prototype.addItem = function (item) {
        this.nameList.push(item);
    };
    ;
    ScalesStorageEngineArray.prototype.getItem = function (index) {
        return this.nameList[index];
    };
    ;
    ScalesStorageEngineArray.prototype.getCount = function () {
        var sum = 0;
        this.nameList.forEach(function (v) {
            sum += v.getScale();
        });
        return sum;
    };
    ;
    ScalesStorageEngineArray.prototype.getItems = function () {
        var list = [];
        this.nameList.forEach(function (v) {
            list.push(v.getName());
        });
        return list;
    };
    ;
    return ScalesStorageEngineArray;
}());
;
var ScalesStorageEngineLocalStorage = /** @class */ (function () {
    function ScalesStorageEngineLocalStorage() {
    }
    ScalesStorageEngineLocalStorage.prototype.addItem = function (item) {
        localStorage.setItem('' + item.name, '' + item.scale);
    };
    ;
    ScalesStorageEngineLocalStorage.prototype.getItem = function (index) {
        var name = localStorage.key(index);
        var scale = +localStorage.getItem(name);
        var newProd = new Product(name, scale);
        return newProd;
    };
    ;
    ScalesStorageEngineLocalStorage.prototype.getCount = function () {
        var sum = 0;
        for (var i = 0; i < localStorage.length; i++) {
            var k = localStorage.key(i);
            sum += +localStorage.getItem(k);
        }
        ;
        return sum;
    };
    ;
    ScalesStorageEngineLocalStorage.prototype.getItems = function () {
        var list = [];
        for (var i = 0; i < localStorage.length; i++) {
            list.push(localStorage.key(i));
        }
        ;
        return list;
    };
    ;
    return ScalesStorageEngineLocalStorage;
}());
;
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
var prod1 = new Product('prod1', 100);
var prod2 = new Product('prod2', 200);
var prod3 = new Product('prod3', 300);
var storageEngineArray = new Scales();
storageEngineArray.create(new ScalesStorageEngineArray());
storageEngineArray.add(prod1);
storageEngineArray.add(prod2);
storageEngineArray.add(prod3);
console.log('storageEngineArray:');
console.log(storageEngineArray.getNameList());
console.log(storageEngineArray.getSumScale());
var storageEngineLocalStorage = new Scales();
storageEngineLocalStorage.create(new ScalesStorageEngineArray());
storageEngineLocalStorage.add(prod1);
storageEngineLocalStorage.add(prod2);
storageEngineLocalStorage.add(prod3);
console.log('storageEngineLocalStorage:');
console.log(storageEngineLocalStorage.getNameList());
console.log(storageEngineLocalStorage.getSumScale());
//# sourceMappingURL=app.js.map