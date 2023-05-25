import { Consumable } from "./Consumable";

export class Pizza extends Consumable {
    public numberOfSlices: number;
    private numberOfEatenSlices: number = 0;

    constructor(value: number, weight: number, numberOfSlices: number, isSpoiled: boolean = false, isConsumed: boolean = false) {
        super('pizza',value, weight, isSpoiled, isConsumed);
        this.numberOfSlices = numberOfSlices;
    }

    use(): string {
        let resultMessage: string;

        if (this.numberOfSlices > 0) {
            this.numberOfSlices--;
            this.numberOfEatenSlices++;

            resultMessage = `You consumed a slice of the pizza.`;
        } else {
            this.isConsumed = true;
            return super.use();
        }
        return resultMessage;
    }

    getNumberOfEatenSlices(): number {
        return this.numberOfEatenSlices;
    }
}