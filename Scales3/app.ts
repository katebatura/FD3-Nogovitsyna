interface IStorageEngine {
    addItem(item:Product):void;
    getItem(index:number):Product;
    getCount():number;
    getItems():string[];
};

class Scales<StorageEngine extends IStorageEngine> {

    private storage:StorageEngine;

    constructor() {
    };

    public create(_storage:StorageEngine) {
        this.storage = _storage;
     }

    public add(item:Product):void {
        this.storage.addItem(item);
    };

    public getNameList():string[] {
       return this.storage.getItems();
    };

    public getSumScale():number {
        return this.storage.getCount();        
    };
 
    
};


class ScalesStorageEngineArray implements IStorageEngine {

    private nameList:Product[];

    constructor() {
        this.nameList = [];
    };

    addItem(item:Product):void {
        this.nameList.push(item);
    };

    getItem(index:number):Product {
        return this.nameList[index];
    };

    getCount():number {
        let sum:number = 0;
        this.nameList.forEach(v => {
           sum += v.getScale();
        });
        return sum;
    };

    getItems():string[] {
        let list:string[] = [];
        this.nameList.forEach(v => {
           list.push(v.getName());
        });
        return list;
    };

};

class ScalesStorageEngineLocalStorage  implements IStorageEngine {

    addItem(item:Product):void {
        localStorage.setItem('' + item.name , '' + item.scale)
    };

    getItem(index:number):Product {
        let name:string = localStorage.key(index);
        let scale:number =  +localStorage.getItem(name);

        let newProd:Product = new Product(name,scale)
        
        return newProd;
    };
    
    getCount():number {
        let sum:number = 0;
        for(let i = 0; i < localStorage.length; i++) {
            let k = localStorage.key(i);
            sum += +localStorage.getItem(k)
        };

        return sum;
    };
    
    getItems():string[] {
        let list:string[] = [];
        for(let i = 0; i < localStorage.length; i++) {
            list.push(localStorage.key(i));
        };

        return list;
    };

};


class Product {
    
    name:string;
    scale:number;

    constructor(_name:string, _scale:number) {
        this.name = _name; 
        this.scale = _scale;
    }

    getScale():number {
        return this.scale
    };

    getName():string {
        return this.name
    };

};

let prod1:Product = new Product('prod1', 100);
let prod2:Product = new Product('prod2', 200);
let prod3:Product = new Product('prod3', 300);

let storageEngineArray = new Scales<ScalesStorageEngineArray>();
storageEngineArray.create(new ScalesStorageEngineArray());


storageEngineArray.add(prod1);
storageEngineArray.add(prod2);
storageEngineArray.add(prod3);

console.log('storageEngineArray:');
console.log(storageEngineArray.getNameList());
console.log(storageEngineArray.getSumScale());


let storageEngineLocalStorage = new Scales<ScalesStorageEngineLocalStorage>();
storageEngineLocalStorage.create(new ScalesStorageEngineArray());


storageEngineLocalStorage.add(prod1);
storageEngineLocalStorage.add(prod2);
storageEngineLocalStorage.add(prod3);


console.log('storageEngineLocalStorage:');
console.log(storageEngineLocalStorage.getNameList());
console.log(storageEngineLocalStorage.getSumScale());





