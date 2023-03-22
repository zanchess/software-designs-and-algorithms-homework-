import { Shipment } from "./Shipment";
import {ShipmentParams} from "./interfaces";

export class Package extends Shipment {
    private static package: Package;
    constructor(shipmentParams: ShipmentParams) {
        super(shipmentParams);
    }

    public static getInstance(shipmentParams: ShipmentParams): Package {
        if (!Package.package) {
            Package.package = new Package(shipmentParams);
        }

        return Package.package;
    }

}