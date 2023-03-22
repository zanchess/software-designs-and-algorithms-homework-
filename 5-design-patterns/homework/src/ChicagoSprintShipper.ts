import { Shipper } from "./Shipper";

export class ChicagoSprintShipper extends Shipper {
    private static ChicagoSprintShipper: ChicagoSprintShipper;

    constructor() {
        super();
    }

    public static getInstance(): ChicagoSprintShipper {
        if (!ChicagoSprintShipper.ChicagoSprintShipper) {
            ChicagoSprintShipper.ChicagoSprintShipper = new ChicagoSprintShipper();
        }

        return ChicagoSprintShipper.ChicagoSprintShipper;
    }
}