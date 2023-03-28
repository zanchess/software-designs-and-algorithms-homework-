export abstract class Shipper {
    abstract getCost(weight: number, type: string): number;

}