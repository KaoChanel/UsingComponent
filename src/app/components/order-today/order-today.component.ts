import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SaleOrderHeaderView } from 'src/app/_models/saleOrderHeaderView';
import { SaleOrderService } from './../../_service//saleOrder/sale-order.service';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2';
import { MatSelectChange } from '@angular/material/select';
import { Employee } from 'src/app/_models/employee';
import { EmployeeService } from 'src/app/_service/employee/employee.service';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

/** Constants used to fill up our data base. */
const COLORS: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

@Component({
  selector: 'app-order-today',
  templateUrl: './order-today.component.html',
  styleUrls: ['./order-today.component.css']
})

export class OrderTodayComponent implements AfterViewInit {

  selectedCompany: string = localStorage.getItem("company") ?? '';
  colorControl = new FormControl(this.selectedCompany);  /// Binding global-constant.
  range = new FormGroup({ start: new FormControl(new Date()), end: new FormControl(new Date()) });
  orderToday: number = 0;
  orderTodaySummary: number = 0;
  employee: Employee = {empName: ""};
  dataSource: MatTableDataSource<SaleOrderHeaderView>;
  saleOrderHeaders: SaleOrderHeaderView[] = [];
  saleOrderHeaderView?: SaleOrderHeaderView[];

  displayedColumns: string[] =
    [
      'soId',
      'docuNo',
      'docuDate',
      'empName',
      'custName',
      // 'shipToAddr1',
      'netAmnt',
      // 'remark',
      'isTransfer'
    ];

  companies = [
    { value: 'BIO', text: 'BioSci Animal Health' },
    { value: 'NIC', text: 'Nutrition Improvment' },
    { value: 'SIS', text: 'Special Ingredient Services' },
    { value: 'FAITH', text: 'Feed And Ingredient Technological Hub' },
    { value: 'PEDEX', text: 'Ped Ex' },
    { value: 'PTK', text: 'Protest Kit' },
    { value: 'PTKTEST', text: 'Protest Kit (Test)' }
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  public Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: false,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  constructor(private saleorder: SaleOrderService, private empService: EmployeeService, public datePipe: DatePipe) {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    // Create 100 users
    const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));
    this.getOrder();

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.saleOrderHeaders);
    console.log(this.saleOrderHeaders);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getOrder(): void {
    this.saleorder.getSaleOrderHeaderRange(new Date(), new Date())
      .then(e => {
        this.saleOrderHeaders = e as SaleOrderHeaderView[];
        this.orderToday = this.saleOrderHeaders?.length ?? 0;
        this.orderTodaySummary = this.saleOrderHeaders.reduce((acc, val) => acc += val.netAmnt ?? 0, 0);

        this.dataSource = new MatTableDataSource(this.saleOrderHeaders);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  getEmployeeName(empId: number) {
    let empName: string | undefined;
    this.empService.getEmployeeById(empId)
    .forEach(e => {
        empName = e.empName;
        this.employee = e;
        console.log("this.employee: " + this.employee.empName);
      });
    console.log("this.employee: " + this.employee.empName);
  }

  getOrderRange(): void {
    this.saleorder.getSaleOrderHeaderRange(this.range.controls.start.value, this.range.controls.end.value)
      .then(e => {
        this.saleOrderHeaders = e as SaleOrderHeaderView[];
        this.dataSource = new MatTableDataSource(this.saleOrderHeaders);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        // this.orderToday = this.saleOrderHeaders?.length ?? 0;
        console.log(this.saleOrderHeaders);

        this.Toast.fire({ icon: 'info', title: this.saleOrderHeaders?.length > 0 ? this.saleOrderHeaders?.length + ' documents has been found.' : ' Not found document.' });
      });
  }

  CompanyChanged(event: MatSelectChange) {
    this.selectedCompany = this.colorControl.value;
    localStorage.setItem('company', this.selectedCompany);
    this.Toast.fire({ icon: 'info', title: event.source.triggerValue + ' has been selected.' });
    this.getOrder();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}
