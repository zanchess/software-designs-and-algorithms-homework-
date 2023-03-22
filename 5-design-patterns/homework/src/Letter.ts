import { Shipment } from "./Shipment";

export class Letter extends Shipment {
    private static letter: Letter;
    constructor() {
        super();
    }

    getInstance(): Letter {
        if (!Letter.letter) {
            Letter.letter = new Letter();
        }

        return Letter.letter;
    }

}