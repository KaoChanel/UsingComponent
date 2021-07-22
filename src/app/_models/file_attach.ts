// To parse this data:
//
//   import { Convert } from "./file";
//
//   const fileAttach = Convert.toFileAttach(json);

export interface FileAttach {
    fileId?:     string;
    soid?:       number;
    listNo?:     number;
    name?:       string;
    itemType?:   string;
    extension?:  string;
    url?:        string;
    folderPath?: string;
    size?:       number;
    createDate?: Date;
    uploadBy?:   number;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toFileAttach(json: string): FileAttach[] {
        return JSON.parse(json);
    }

    public static fileAttachToJson(value: FileAttach[]): string {
        return JSON.stringify(value);
    }
}
