export class FoodItem {
    id: numer;
    name: string;
    mfg: string;
    pkg: string;
    qty: number;

    constructor(id:string, name:string, mfg:string, pkg:string, qty:number) {
       this.id = id;
       this.name = name; 
       this.mfg = mfg;
       this.pkg = pkg;
       this.qty = qty;
    }
}