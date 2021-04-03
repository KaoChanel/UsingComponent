// To parse this data:
//
//   import { Convert, GoodsUnit } from "./file";
//
//   const goodsUnit = Convert.toGoodsUnit(json);

export interface GoodsUnit {
    rowId?:           number;
    goodUnitId?:      number;
    goodUnitCode?:    string;
    goodUnitName?:    string;
    goodUnitNameEng?: string;
    remark?:          string;
    refGoodUnitId?:   null;
    baseFlag?:        string;
    rateQty?:         number;
    baseQty?:         number;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toGoodsUnit(json: string): GoodsUnit {
        return JSON.parse(json);
    }

    public static goodsUnitToJson(value: GoodsUnit): string {
        return JSON.stringify(value);
    }
}
