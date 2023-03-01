import { Item } from "./Item";
import { ItemComparator } from "./ItemComparator";

export class Inventory {
    private items: Item[] = [];
    constructor() {}

    sort(): void;
    sort(comparator?: ItemComparator): void {
        this.items.sort((a, b) => {
            return comparator ? comparator.compare(a, b) : a.compareTo(b);
        })
    }

    addItem(item: Item): void {
        this.items.push(item);
    }

    toString(): string {
        return this.items.join(', ');
    }


}