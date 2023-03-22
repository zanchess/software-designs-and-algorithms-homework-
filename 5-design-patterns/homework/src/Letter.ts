import { Shipment } from "./Shipment";
import { ShipmentParams } from "./interfaces";
import { Shipper } from "./Shipper";

export class Letter extends Shipment {
    private static letter: Letter;
    constructor(shipmentParams: ShipmentParams, shipper: Shipper) {
        super(shipmentParams, shipper);
    }

    public static getInstance(shipmentParams: ShipmentParams, shipper: Shipper): Letter {
        if (!Letter.letter) {
            Letter.letter = new Letter(shipmentParams, shipper);
        }

        return Letter.letter;
    }

}