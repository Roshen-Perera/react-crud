export class Item {
    id: string;
    name: string;
    type: string;
    qty: number;
    price: number;

    constructor(id: string, name: string, type: string, qty: number, price: number) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.qty = qty;
        this.price = price
    }
}

