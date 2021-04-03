// To parse this data:
//
//   import { Convert } from "./file";
//
//   const saleOrderInfo = Convert.toSaleOrderInfo(json);

export interface SaleOrderInfo {
    soid?:             number;
    saleAreaId?:       number;
    vatgroupId?:       number;
    empId?:            number;
    empCode?:          string;
    empName?:          string;
    currTypeId?:       null;
    creditId?:         null;
    brchId?:           number;
    currId?:           null;
    transpAreaId?:     null;
    transpId?:         number;
    custId?:           number;
    custCode?:         string;
    custName?:         string;
    taxId?:            string;
    creditType?:       null;
    creditDays?:       number;
    creditAmnt?:       number;
    creditState?:      string;
    deptId?:           number;
    docuNo?:           string;
    docuType?:         number;
    docuDate?:         Date;
    validDays?:        number;
    expireDate?:       null;
    onHold?:           string;
    vatRate?:          number;
    vatType?:          string;
    goodType?:         string;
    shipToAddr1?:      string;
    shipToAddr2?:      null;
    district?:         null;
    amphur?:           string;
    province?:         string;
    tel?:              null;
    postCode?:         string;
    fax?:              null;
    contactName?:      null;
    condition?:        null;
    shipDays?:         null;
    creditTermType?:   null;
    shipDate?:         Date;
    sumIncludeAmnt?:   null;
    sumExcludeAmnt?:   null;
    sumGoodAmnt?:      number;
    baseDiscAmnt?:     null;
    billDiscFormula?:  null;
    billDiscAmnt?:     number;
    billAftrDiscAmnt?: number;
    totaExcludeAmnt?:  null;
    totaBaseAmnt?:     null;
    vatamnt?:          number;
    netAmnt?:          number;
    attach?:           null;
    custPodate?:       Date;
    custPono?:         string;
    vateffc?:          null;
    refSoid?:          null;
    commission?:       null;
    refNo?:            string;
    refDate?:          null;
    commissionAmnt?:   null;
    clearSo?:          null;
    endCreditDate?:    null;
    multiCurrency?:    null;
    docuStatus?:       string;
    shipToCode?:       string;
    isTransfer?:       string;
    listNo?:           number;
    jobId?:            null;
    goodId?:           number;
    goodCode?:         string;
    goodName?:         string;
    goodUnitId2?:      number;
    goodUnitCode?:     string;
    goodUnitName?:     string;
    goodUnitNameEng?:  string;
    goodQty2?:         number;
    goodPrice2?:       number;
    goodDiscFormula?:  null;
    goodDiscAmnt?:     number;
    goodAmnt?:         number;
    poqty?:            number;
    afterMarkupamnt?:  number;
    remarkHeader?:     string;
    remarkDetail?:     string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toSaleOrderInfo(json: string): SaleOrderInfo[] {
        return JSON.parse(json);
    }

    public static saleOrderInfoToJson(value: SaleOrderInfo[]): string {
        return JSON.stringify(value);
    }
}
