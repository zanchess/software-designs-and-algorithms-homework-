import { shipmentParams } from './interfaces';

export class Client {
    private shipment: any

    constructor(shipment: shipmentParams) {
        this.shipment = shipment;
    }


}