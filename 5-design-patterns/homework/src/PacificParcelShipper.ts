import { Shipper } from "./Shipper";

class PacificParcelShipper extends Shipper {
    private static pacificParcelShipper: PacificParcelShipper;

    constructor() {
        super();
    }

    getInstance(): PacificParcelShipper {
        if (!PacificParcelShipper.pacificParcelShipper) {
            PacificParcelShipper.pacificParcelShipper = new PacificParcelShipper();
        }

        return PacificParcelShipper.pacificParcelShipper;
    }
}