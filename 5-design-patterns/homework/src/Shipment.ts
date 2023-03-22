import { ShipmentParams } from "./interfaces";
import { Shipper } from "./Shipper";

export abstract class Shipment {
    private shipmentParams: ShipmentParams;
    private shipmentId: number;
    private shipper: Shipper;

    constructor(shipmentParams: ShipmentParams, shipper: Shipper, shipmentId?: number) {
        this.shipmentId = shipmentId || 0;
        this.shipmentParams = shipmentParams;
        this.shipper = shipper;

    }

    getShipmentId(): number {
        return this.shipmentId++;
    }

    ship (): string {
        return '';
    }
}