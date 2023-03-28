import { Shipper } from "./Shipper";
import { SHIPMENT_TYPE } from "./interfaces";

export class PacificParcelShipper extends Shipper {
    private static pacificParcelShipper: PacificParcelShipper;
    private LETTER_COST_PER_OUNCE = 0.51;
    private PACKAGE_COST_PER_OUNCE = 0.19;

    constructor() {
        super();
    }

    getCost(weight: number, type: string): number {
        let cost: number;

        switch (type) {
            case SHIPMENT_TYPE.LETTER:
                cost = weight * this.LETTER_COST_PER_OUNCE;
                break;
            case SHIPMENT_TYPE.PACKAGE:
                cost = weight * this.PACKAGE_COST_PER_OUNCE;
                break;
            default:
                cost = weight * (this. PACKAGE_COST_PER_OUNCE + 0.02);
        }

        return cost;
    }

    public static getInstance(): PacificParcelShipper {
        if (!PacificParcelShipper.pacificParcelShipper) {
            PacificParcelShipper.pacificParcelShipper = new PacificParcelShipper();
        }

        return PacificParcelShipper.pacificParcelShipper;
    }
}