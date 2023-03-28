import { ShipmentParams } from './interfaces';
import { Shipment } from "./Shipment";
import { Letter } from "./Letter";
import { Package } from "./Package";
import { Oversized } from "./Oversized";
import { Shipper } from "./Shipper";
import { AirEastShipper } from './AirEastShipper';
import { ChicagoSprintShipper } from './ChicagoSprintShipper';
import { PacificParcelShipper } from "./PacificParcelShipper";

export class Client {
    private readonly shipmentParams: ShipmentParams;
    private ZIP_CODE_FIRST_NUMBERS = {
        airEast: [1, 2, 3],
        chicagoSprint: [4, 5, 6],
        pacificParcel: [7, 8, 9]
    }

    constructor(shipmentParams: ShipmentParams) {
        this.shipmentParams = shipmentParams;
    }

    getShipperDetails (): Shipper {
        const { fromZipCode } = this.shipmentParams;
        const zipCodeFirstNumber = Number(fromZipCode[0]);
        const { airEast, chicagoSprint } = this.ZIP_CODE_FIRST_NUMBERS;
        let shipper: Shipper;

        if (airEast.includes(zipCodeFirstNumber)){
            shipper = AirEastShipper.getInstance();
        } else if (chicagoSprint.includes(zipCodeFirstNumber)){
            shipper = ChicagoSprintShipper.getInstance();
        } else {
            shipper = PacificParcelShipper.getInstance();
        }

        return shipper;
    }

    getShipmentDetails(): Shipment {
        const { weight } = this.shipmentParams
        let shipment: Shipment;

        if (weight <= 15) {
            shipment = Letter.getInstance(this.shipmentParams, this.getShipperDetails());
        } else if (weight > 15 && weight <= 160) {
            shipment = Package.getInstance(this.shipmentParams, this.getShipperDetails());
        } else {
            shipment = Oversized.getInstance(this.shipmentParams, this.getShipperDetails());
        }

        return shipment;
    }

    ship(): string {
        return this.getShipmentDetails().ship();
    }
}

const shipmentMock: ShipmentParams = {
    shipmentId: 1234567,
    weight: 100,
    fromAddress: '111 some address',
    fromZipCode: '123123',
    toAddress: '111 to address',
    toZipCode: '234234',
};


const client = new Client(shipmentMock);
console.log(client.ship());