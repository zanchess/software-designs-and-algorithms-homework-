import { Shipper } from "./Shipper";
import { SHIPMENT_TYPE } from "./interfaces";

export class ChicagoSprintShipper extends Shipper {
    private static ChicagoSprintShipper: ChicagoSprintShipper;
    private LETTER_COST_PER_OUNCE = 0.42;
    private PACKAGE_COST_PER_OUNCE = 0.20;

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
                cost = 0;
        }

        return cost;
    }


    public static getInstance(): ChicagoSprintShipper {
        if (!ChicagoSprintShipper.ChicagoSprintShipper) {
            ChicagoSprintShipper.ChicagoSprintShipper = new ChicagoSprintShipper();
        }

        return ChicagoSprintShipper.ChicagoSprintShipper;
    }
}