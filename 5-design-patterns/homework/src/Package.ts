import { Shipment } from "./Shipment";

export class Package extends Shipment {
    private static package: Package;
    constructor() {
        super();
    }

    getInstance(): Package {
        if (!Package.package) {
            Package.package = new Package();
        }

        return Package.package;
    }

}