import { Shipment } from "./Shipment";
import {ShipmentParams} from "./interfaces";

export class Oversized extends Shipment {
    private static oversized: Oversized;
    constructor(shipmentParams: ShipmentParams) {
        super(shipmentParams);
    }

    public static getInstance(shipmentParams: ShipmentParams): Oversized {
        if (!Oversized.oversized) {
            Oversized.oversized = new Oversized(shipmentParams);
        }

        return Oversized.oversized;
    }

}