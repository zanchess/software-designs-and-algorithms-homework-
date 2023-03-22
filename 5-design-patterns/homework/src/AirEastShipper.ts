import { Shipper } from "./Shipper";

class AirEastShipper extends Shipper {
    private static AirEastShipper: AirEastShipper;

    constructor() {
        super();
    }

    getInstance(): AirEastShipper {
        if (!AirEastShipper.AirEastShipper) {
            AirEastShipper.AirEastShipper = new AirEastShipper();
        }

        return AirEastShipper.AirEastShipper;
    }
}