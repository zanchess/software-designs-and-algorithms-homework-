import { Shipper } from "./Shipper";

class ChicagoSprintShipper extends Shipper {
    private static ChicagoSprintShipper: ChicagoSprintShipper;

    constructor() {
        super();
    }

    getInstance(): ChicagoSprintShipper {
        if (!ChicagoSprintShipper.ChicagoSprintShipper) {
            ChicagoSprintShipper.ChicagoSprintShipper = new ChicagoSprintShipper();
        }

        return ChicagoSprintShipper.ChicagoSprintShipper;
    }
}