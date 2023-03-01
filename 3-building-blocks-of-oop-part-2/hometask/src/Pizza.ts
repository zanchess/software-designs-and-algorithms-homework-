import { Consumable } from "./Consumable";

export class Pizza extends Consumable {
    public numberOfSlices: number;
    private numberOfEatenSlices: number = 0;

    constructor(value: number, weight: number, numberOfSlices: number, isSpoiled: boolean = false) {
        super('pizza',value, weight, isSpoiled);
        this.numberOfSlices = numberOfSlices;
    }

    use(): string {
        let resultMessage: string;

        if (this.numberOfSlices > 0) {
            this.numberOfSlices--;
            this.numberOfEatenSlices++;

            resultMessage = `You consumed a slice of the pizza.`;
        } else {
            resultMessage = `There's nothing left of the pizza to consume.`;
        }
        return resultMessage;
    }

    getNumberOfEatenSlices(): number {
        return this.numberOfEatenSlices;
    }
}