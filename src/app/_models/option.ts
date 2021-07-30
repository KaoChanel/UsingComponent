// To parse this data:
//
//   import { Convert } from "./file";
//
//   const option = Convert.toOption(json);

export interface Option {
    brchId?:           number;
    vatgroupId?:       number;
    era?:              string;
    postGl?:           string;
    multiCurrency?:    string;
    showMoneySign?:    null;
    signPosition?:     null;
    amntdec?:          null;
    qtydec?:           number;
    unitamntdec?:      number;
    timeAlertFlag?:    string;
    timeAlert?:        null;
    runOption?:        string;
    logobrch?:         null;
    isLockPrice:       string;
    isLockPriceLower:  string;
    isLockCust:        string;
    isCheckCredit:     string;
    isLockStockLower:  string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toOption(json: string): Option[] {
        return JSON.parse(json);
    }

    public static optionToJson(value: Option[]): string {
        return JSON.stringify(value);
    }
}
