

export abstract class Shipment {
    private static shipment: Shipment;
    private shipmentId: number;

    constructor() {
        this.shipmentId = 0;
    }

    abstract getInstance();

    getShipmentId(): number {
        return this.shipmentId++;
    }

    ship (): string {
        return '';
    }
}