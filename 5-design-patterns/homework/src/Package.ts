import { Shipment } from "./Shipment";
import { ShipmentParams } from "./interfaces";
import { Shipper } from "./Shipper";

export class Package extends Shipment {
    private static package: Package;
    constructor(shipmentParams: ShipmentParams, shipper: Shipper) {
        super(shipmentParams, shipper);
    }

    public static getInstance(shipmentParams: ShipmentParams, shipper: Shipper): Package {
        if (!Package.package) {
            Package.package = new Package(shipmentParams, shipper);
        }

        return Package.package;
    }

}