import { Comparable } from "./Comparable";

export abstract class Item implements Comparable<any>{
    static idCounter: number = 0;
    readonly id: number;
    readonly name: string;
    readonly value: number;
    readonly weight: number;


    constructor(name: string, value: number, weight: number) {
        Item.idCounter++;
        this.id = Item.idCounter;
        this.name = name;
        this.value = value;
        this.weight = weight;
    }

    compareTo(other: Item): number {
        if (other.value < this.value){
            return 1;
        } else if (other.value > this.value) {
            return -1;
        } else {
            const nameComparison = this.name.localeCompare(other.name, undefined, { sensitivity: 'base' });
            return nameComparison !== 0 ? nameComparison : 0;
        }
    }

    static resetIdCounter(): void {
        Item.idCounter = 0;
    }

    getId(): number {
        return this.id;
    }

    toString() {
        return `${this.name} − Value: ${this.value.toFixed(2)}, Weight: ${this.weight.toFixed(2)}`;
    }
}