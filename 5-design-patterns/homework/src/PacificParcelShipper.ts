import { Shipper } from "./Shipper";

export class PacificParcelShipper extends Shipper {
    private static pacificParcelShipper: PacificParcelShipper;

    constructor() {
        super();
    }

    public static getInstance(): PacificParcelShipper {
        if (!PacificParcelShipper.pacificParcelShipper) {
            PacificParcelShipper.pacificParcelShipper = new PacificParcelShipper();
        }

        return PacificParcelShipper.pacificParcelShipper;
    }
}