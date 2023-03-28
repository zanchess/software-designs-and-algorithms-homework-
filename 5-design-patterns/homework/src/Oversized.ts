import { Shipment } from "./Shipment";
import { ShipmentParams } from "./interfaces";
import { Shipper } from "./Shipper";

export class Oversized extends Shipment {
    private static oversized: Oversized;
    constructor(shipmentParams: ShipmentParams, shipper: Shipper) {
        super(shipmentParams, shipper);
    }

    public static getInstance(shipmentParams: ShipmentParams, shipper: Shipper): Oversized {
        if (!Oversized.oversized) {
            Oversized.oversized = new Oversized(shipmentParams, shipper);
        }

        return Oversized.oversized;
    }

}