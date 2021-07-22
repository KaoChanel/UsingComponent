// To parse this data:
//
//   import { Convert } from "./file";
//
//   const saleOrderHeader = Convert.toSaleOrderHeader(json);

export interface SaleOrderHeaderView {
    soId:              number;
    custId:            number;
    empId:             number;
    empName:           string;
    docuNo?:           string;
    docuDate?:         Date;
    shipDate?:         Date;
    shipToAddr1?:      string;
    shipToAddr2?:      string;
    province?:         string;
    remarkHeader?:     string;
    isTransfer?:       string;
    createTime?:       Date;

    custPodate?:       Date | null;
    custPono?:         string;
    refNo?:            string;
    sumGoodAmnt?:      number;
    baseDiscAmnt?:     null;
    billDiscFormula?:  null;
    billDiscAmnt?:     number;
    billAftrDiscAmnt?: number;
    totaExcludeAmnt?:  null;
    totaBaseAmnt?:     null;
    vatamnt?:          number;
    netAmnt?:          number;
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
