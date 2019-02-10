interface IStorageEngine {
    addItem(item:Product):void;
    getItem(index:number):Product;
    getCount():number;
};


function uniFactory<objtype>(classRef: { new (): objtype; }): objtype {
    return new classRef();
 };


class Scales<StorageEngine extends IStorageEngine> {

    private storage:StorageEngine;

    constructor() {
        this.storage = uniFactory(StorageEngine);
    };


    public add(item:Product):void {
        this.storage.addItem(item);
    };

    public getNameList():string[] {
        let nameList:string[] = [];
        let count = this.storage.getCount();

        for(let i = 0; i < count; i++) {
            let item:Product = this.storage.getItem(i);
            nameList.push(item.name);
        };

        return nameList;
    };

    public getSumScale():number {
        
        let sum:number = 0;
        let count = this.storage.getCount();

        for(let i = 0; i < count; i++) {
            let item:Product = this.storage.getItem(i);
            sum += item.scale;
        };

        return sum;     
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
        let sum:number = this.nameList.length;        
        return sum;
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
        let sum:number = localStorage.length;

        return sum;
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


storageEngineArray.add(prod1);
storageEngineArray.add(prod2);
storageEngineArray.add(prod3);

console.log('storageEngineArray:');
console.log(storageEngineArray.getNameList());
console.log(storageEngineArray.getSumScale());


let storageEngineLocalStorage = new Scales<ScalesStorageEngineLocalStorage>();


storageEngineLocalStorage.add(prod1);
storageEngineLocalStorage.add(prod2);
storageEngineLocalStorage.add(prod3);


console.log('storageEngineLocalStorage:');
console.log(storageEngineLocalStorage.getNameList());
console.log(storageEngineLocalStorage.getSumScale());





