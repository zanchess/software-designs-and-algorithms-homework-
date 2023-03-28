import { ShipmentParams} from "./interfaces";
import { Shipper } from "./Shipper";

export abstract class Shipment {
    protected shipmentParams: ShipmentParams;
    private shipmentId: number;
    protected shipper: Shipper;
    private shipmentIdMock = 0;

    constructor(shipmentParams: ShipmentParams, shipper: Shipper, shipmentId?: number) {
        this.shipmentId = shipmentId || 0;
        this.shipmentParams = {...shipmentParams, shipmentId: shipmentParams.shipmentId || this.getShipmentId()};
        this.shipper = shipper;

    }

    getShipmentId(): number {
        return this.shipmentIdMock++;
    }

    ship() {
        return `Shipment with the ID ${this.shipmentParams.shipmentId} will be picked up from ${this.shipmentParams.fromAddress}, ${this.shipmentParams.fromZipCode} and shipped to ${this.shipmentParams.toAddress}, ${this.shipmentParams.toZipCode}.\n`;
    };
}