// To parse this data:
//
//   import { Convert } from "./file";
//
//   const saleOrderDetail = Convert.toSaleOrderDetail(json);

export interface SaleOrderDetail {
    soid?:              number;
    listNo?:            number;
    refSoid?:           null;
    docuType?:          number;
    jobId?:             null;
    vatgroupId?:        null;
    goodId?:            number;
    goodName?:          string;
    inveId?:            null;
    locaId?:            null;
    goodUnitId1?:       null;
    goodPrice1?:        number;
    goodQty1?:          number;
    goodUnitId2?:       number;
    goodStockRate1?:    null;
    goodQty2?:          number;
    goodPrice2?:        number;
    goodDiscFormula?:   null;
    goodDiscAmnt?:      number;
    goodStockRate2?:    null;
    miscChargFormula?:  null;
    goodDiscType?:      null;
    miscChargAmnt?:     null;
    chargRemark?:       null;
    sumExcludeAmnt?:    null;
    goodCompareQty?:    number;
    goodAmnt?:          number;
    goodCompareUnitId?: null;
    markUp?:            null;
    contactName?:       null;
    shipToAddr1?:       null;
    shipToAddr2?:       null;
    district?:          null;
    amphur?:            null;
    province?:          null;
    postCode?:          null;
    fax?:               null;
    tel?:               null;
    shipDue?:           null;
    shipDate?:          null;
    refListNo?:         null;
    remaBefoQty?:       null;
    remark?:            null;
    lotNo?:             null;
    lotFlag?:           null;
    goodType?:          string;
    serialFlag?:        null;
    goodStockUnitId?:   null;
    postFlag?:          null;
    goodStockQty?:      null;
    goodCost?:          number;
    vatType?:           null;
    vatrate?:           null;
    stockFlag?:         null;
    goodFlag?:          null;
    remaQty?:           null;
    reserveQty?:        null;
    freeFlag?:          null;
    resvStr1?:          null;
    resvStr2?:          null;
    resvStr3?:          null;
    resvAmnt1?:         null;
    resvAmnt2?:         null;
    resvDate1?:         null;
    goodRemaQty1?:      null;
    goodRemaQty2?:      null;
    shipToCode?:        null;
    markUpAmnt?:        null;
    commisFormula?:     null;
    commisAmnt?:        null;
    refno?:             null;
    poqty?:             null;
    remaQtyPkg?:        null;
    expireflag?:        null;
    poststock?:         null;
    afterMarkupamnt?:   number;
    remaGoodStockQty?:  null;
    remaamnt?:          null;
    serialsNo?:         null;
    isTransfer?:        string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toSaleOrderDetail(json: string): SaleOrderDetail[] {
        return JSON.parse(json);
    }

    public static saleOrderDetailToJson(value: SaleOrderDetail[]): string {
        return JSON.stringify(value);
    }
}
