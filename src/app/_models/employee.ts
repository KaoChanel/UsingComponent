// To parse this data:
//
//   import { Convert, Employee } from "./file";
//
//   const employee = Convert.toEmployee(json);

export interface Employee {
    deptId?:      number;
    deptName?:    string;
    deptCode?:    string;
    sideId?:      number;
    postId?:      null;
    postCode?:    null;
    postName?:    null;
    empId?:       number;
    empCode?:     string;
    empTitle?:    string;
    empTitleEng?: string;
    empName:      string;
    empNameEng?:  string;
    email?:       null;
    teamId?:      null;
    dummyCode?:   null;
    remark?:      null;
    username?:    null;
    empStatus?:   string;
    isLock?:      string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toEmployee(json: string): Employee {
        return JSON.parse(json);
    }

    public static employeeToJson(value: Employee): string {
        return JSON.stringify(value);
    }
}
