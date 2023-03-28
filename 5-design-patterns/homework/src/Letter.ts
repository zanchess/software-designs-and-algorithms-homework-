import { Shipment } from "./Shipment";
import { SHIPMENT_TYPE, ShipmentParams } from "./interfaces";
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

    ship(): string {
        return `${super.ship()} Cost = ${this.shipper.getCost(this.shipmentParams.weight, SHIPMENT_TYPE.LETTER)}`;
    }

}
