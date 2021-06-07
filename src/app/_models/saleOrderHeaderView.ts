// To parse this data:
//
//   import { Convert } from "./file";
//
//   const saleOrderHeader = Convert.toSaleOrderHeader(json);

export interface SaleOrderHeaderView {
    soId:              number;
    empId:             number;
    empName:           string;
    docuDate?:         Date;
    docuNo?:           string;
    shipToAddr1?:      string;
    shipToAddr2?:      string;
    netAmnt?:          number;
    remark?:           string;
    isTransfer?:       string;
    createTime?:       Date;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toSaleOrderHeader(json: string): SaleOrderHeaderView[] {
        return JSON.parse(json);
    }

    public static saleOrderHeaderToJson(value: SaleOrderHeaderView[]): string {
        return JSON.stringify(value);
    }
}
