export interface ShipmentParams {
    shipmentId: number;
    weight: number;
    fromAddress: string;
    fromZipCode: string;
    toAddress: string;
    toZipCode: string;
}

export enum SHIPMENT_TYPE {
    LETTER = 'Letter',
    PACKAGE = 'Package',
    OVERSIZED = 'Oversized'
}