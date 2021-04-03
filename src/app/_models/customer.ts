// To parse this data:
//
//   import { Convert, Customer } from "./file";
//
//   const customer = Convert.toCustomer(json);

export interface Customer {
    rowId?:         number;
    custId?:        number;
    custTypeId?:    null;
    custGroupId?:   number;
    busiTypeId?:    number;
    transpAreaId?:  null;
    custCode?:      string;
    custName?:      string;
    custNameEng?:   null;
    shortName?:     null;
    taxId?:         null;
    custAddr1?:     null;
    custAddr2?:     null;
    district?:      null;
    amphur?:        null;
    province?:      null;
    postCode?:      null;
    contTel?:       null;
    contFax?:       null;
    contEmail?:     null;
    creditType?:    null;
    creditState?:   string;
    creditDays?:    number;
    creditAmnt?:    number;
    saleAreaId?:    number;
    custStartDate?: null;
    cardNo?:        null;
    lineId?:        null;
    inactive?:      string;
    inactiveDate?:  null;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toCustomer(json: string): Customer {
        return JSON.parse(json);
    }

    public static customerToJson(value: Customer): string {
        return JSON.stringify(value);
    }
}
