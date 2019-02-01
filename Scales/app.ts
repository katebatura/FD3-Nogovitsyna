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

class Apple extends Product {

    constructor(_name:string, _scale:number) {
        super('Apple ' + _name,  _scale);
    }
};

class Tomato extends Product {

    constructor(_name:string, _scale:number) {
        super('Tomato ' + _name, _scale);
    }
};



class Scales {
    nameList:Product[];

    constructor() {
        this.nameList = [];
    };

    add(prod:Product):void {
        this.nameList.push(prod);
    };

    getSumScale():number {
        let sum:number = 0;
        this.nameList.forEach(v => {
           sum += v.getScale();
        });
        return sum;
    };

    getNameList ():string[] {
        let list:string[] = [];
        this.nameList.forEach(v => {
           list.push(v.getName());
        });
        return list;
    };
};


let scales:Scales = new Scales;

let app1:Apple = new Apple('green', 200);
scales.add(app1);

let tom1:Tomato = new Tomato('Italian', 150);
scales.add(tom1);

let app2:Apple = new Apple('red', 340);
scales.add(app2);

let tom2:Tomato = new Tomato('Turkish', 410);
scales.add(tom2);


console.log(scales.getNameList(), scales.getSumScale());


let app3:Apple = new Apple('yellow', 125);
scales.add(app3);

let tom3:Tomato = new Tomato('Belarusian', 794);
scales.add(tom3);


console.log(scales.getNameList(), scales.getSumScale());



