// To parse this data:
//
//   import { Convert } from "./file";
//
//   const saleOrderHeader = Convert.toSaleOrderHeader(json);

export interface SaleOrderHeader {
    soId:              number;
    saleAreaId?:       number;
    vatgroupId?:       number;
    empId:             number;
    currTypeId?:       number;
    creditId?:         number;
    brchId?:           number;
    currId?:           number;
    transpAreaId?:     number;
    transpId?:         number;
    custId?:           number;
    deptId?:           number;
    docuNo?:           string;
    docuType?:         number;
    docuDate?:         Date;
    validDays?:        number;
    expireDate?:       Date;
    onHold?:           string;
    vatRate?:          number;
    vatType?:          string;
    goodType?:         string;
    shipToAddr1?:      string;
    shipToAddr2?:      string;
    district?:         null | string;
    amphur?:           null | string;
    province?:         string;
    tel?:              null;
    postCode?:         null | string;
    fax?:              null;
    contactName?:      null;
    condition?:        null;
    shipDays?:         null;
    creditDays?:       number;
    creditTermType?:   null;
    fixedRate?:        null;
    exchRate?:         null;
    exchDate?:         null;
    shipDate?:         Date;
    printTime?:        null;
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
    organName?:        null;
    remark?:           string;
    custPodate?:       Date | null;
    statusRemark?:     null;
    custPono?:         string;
    vateffc?:          null;
    refSoid?:          null;
    commission?:       null;
    refNo?:            string;
    refDate?:          null;
    commissionAmnt?:   null;
    clearSo?:          null;
    fob?:              null;
    discVateffc?:      null;
    endCreditDate?:    null;
    miscChargFormula?: null;
    miscChargAmnt?:    null;
    miscChargRemark?:  null;
    multiCurrency?:    null;
    exchType?:         null;
    fromFlag?:         null;
    custName?:         string;
    resvStr1?:         null;
    resvStr2?:         null;
    resvStr3?:         null;
    resvStr4?:         null;
    resvStr5?:         null;
    resvStr6?:         null;
    resvStr7?:         null;
    resvAmnt1?:        null;
    resvAmnt2?:        null;
    resvAmnt3?:        null;
    resvDate1?:        null;
    docuStatus?:       string;
    resvAmnt4?:        null;
    sotitle?:          null;
    shipToCode?:       string;
    quotStatus?:       null;
    introduceId?:      null;
    appvFlag?:         null;
    contactnameShip?:  null;
    pkgStatus?:        null;
    jobId?:            null;
    refeflag?:         null;
    postdocutype?:     number;
    appvid?:           null;
    clearDate?:        null;
    alertFlag?:        string;
    clearflag?:        null;
    isTransfer?:       string;
    color?:            string;
    createTime?:       Date;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toSaleOrderHeader(json: string): SaleOrderHeader[] {
        return JSON.parse(json);
    }

    public static saleOrderHeaderToJson(value: SaleOrderHeader[]): string {
        return JSON.stringify(value);
    }
}
