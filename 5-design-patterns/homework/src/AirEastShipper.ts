import { Shipper } from "./Shipper";
import { SHIPMENT_TYPE } from "./interfaces";

export class AirEastShipper extends Shipper {
    private static AirEastShipper: AirEastShipper;
    private LETTER_COST_PER_OUNCE = 0.39;
    private PACKAGE_COST_PER_OUNCE = 0.35;

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
                cost = weight * this.PACKAGE_COST_PER_OUNCE + 10;
        }

        return cost;
    }


    public static getInstance(): AirEastShipper {
        if (!AirEastShipper.AirEastShipper) {
            AirEastShipper.AirEastShipper = new AirEastShipper();
        }

        return AirEastShipper.AirEastShipper;
    }
}