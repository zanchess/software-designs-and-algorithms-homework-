

export abstract class Shipper {

    abstract getInstance();
    getCost(): number {
        return 0;
    }

}