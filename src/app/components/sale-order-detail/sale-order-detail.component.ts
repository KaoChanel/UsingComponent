import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { Customer } from 'src/app/_models/customer';
import { Employee } from 'src/app/_models/employee';
import { SaleOrderHeader } from 'src/app/_models/saleOrderHeader';
import { SaleOrderInfo } from 'src/app/_models/saleOrderInfo';
import { CustomerService } from 'src/app/_service/customer/customer.service';
import { EmployeeService } from 'src/app/_service/employee/employee.service';
import { SaleOrderService } from 'src/app/_service/saleOrder/sale-order.service';

@Component({
  selector: 'app-sale-order-detail',
  templateUrl: './sale-order-detail.component.html',
  styleUrls: ['./sale-order-detail.component.css']
})
export class SaleOrderDetailComponent implements AfterViewInit {

  loading = false;
  saleOrderHeader!: SaleOrderHeader;
  saleOrderInfo!: SaleOrderInfo[];
  employee!: Employee;
  customer!: Customer[];
  dataSource!: MatTableDataSource<SaleOrderInfo>;
  displayedColumns?: string[] = 
  [
    'listNo',
    'goodCode',
    'goodName',
    'goodQty2',
    'goodUnitCode',
    'goodPrice2',
    'goodDiscAmnt',
    'goodAmnt'
  ];

  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private saleOrder: SaleOrderService,
    private emp: EmployeeService,
    private cust: CustomerService,
    private route: ActivatedRoute) 
    {
      this.getOrderHeader(this.route.snapshot.params.id);
      this.getOrderInfo(this.route.snapshot.params.id);
    }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  getOrderHeader(saleOrderID: any): void {
    this.loading = true;
    this.saleOrder.getSaleOrderHeaderById(saleOrderID).pipe(finalize(() => this.loading = false))
      .subscribe(response => {
        this.saleOrderHeader = response;
        this.getEmployee(this.saleOrderHeader.empId);
        this.getCustomer(this.saleOrderHeader.custId);
      });
  }

  getOrderInfo(saleOrderID: any): void {
    this.loading = true;
    this.saleOrder.getSaleOrder(saleOrderID).pipe(finalize(() => this.loading = false))
      .subscribe(response => {
        this.saleOrderInfo = response;
        this.dataSource = new MatTableDataSource(this.saleOrderInfo);
        this.dataSource.sort = this.sort;
        console.log(this.saleOrderInfo);
      });
  }

  getEmployee(empId: any){
    this.emp.getEmployeeById(empId).pipe(finalize(() => this.loading = false)).subscribe(response => this.employee = response);
  }

  getCustomer(custId: any){
    this.cust.getCustomer(custId).pipe(finalize(() => this.loading = false)).subscribe(res => this.customer = res);
  }

  getTotalCost() {
    return this.saleOrderInfo!.reduce((sum, value) => sum + value.goodAmnt!, 0);
  }

}
