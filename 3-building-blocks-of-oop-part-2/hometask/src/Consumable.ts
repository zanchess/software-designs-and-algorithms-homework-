import {Item} from "./Item";

export abstract class Consumable extends Item{
    public isConsumed: boolean = false;
    private readonly _isSpoiled: boolean;

    constructor(name: string, value: number, weight: number, isSpoiled: boolean) {
        super(name, value, weight);
        this._isSpoiled = isSpoiled
    }

    use():string {
        if (this.isConsumed) {
            return `There's nothing left of the ${this.name} to consume.`;
        }

        return `You consumed the ${this.name}.${this._isSpoiled? '\nYou feel sick.' : ''}`;
    }

    isSpoiled(): boolean {
        return this._isSpoiled;
    }
}