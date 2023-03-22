import { Shipment } from "./Shipment";

export class Oversized extends Shipment {
    private static oversized: Oversized;
    constructor() {
        super();
    }

    getInstance(): Oversized {
        if (!Oversized.oversized) {
            Oversized.oversized = new Oversized();
        }

        return Oversized.oversized;
    }

}