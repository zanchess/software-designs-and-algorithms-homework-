

export class Shipment {
    private static shipment: Shipment;
    private shipmentId: number;

    constructor() {
        this.shipmentId = 0;
    }

    getInstance(): Shipment {
        if (!Shipment.shipment) {
            Shipment.shipment = new Shipment();
        }

        return Shipment.shipment;
    }

    getShipmentId(): number {
        return this.shipmentId++;
    }

    ship (): string {
        return '';
    }
}