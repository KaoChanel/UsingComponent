import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatList, MatListItem } from '@angular/material/list';
import { ActivatedRoute } from '@angular/router';
import { defaultIfEmpty, finalize, map } from 'rxjs/operators';
import { Customer } from 'src/app/_models/customer';
import { Employee } from 'src/app/_models/employee';
import { SaleOrderHeader } from 'src/app/_models/saleOrderHeader';
import { SaleOrderHeaderView } from 'src/app/_models/saleOrderHeaderView';
import { SaleOrderInfo } from 'src/app/_models/saleOrderInfo';
import { CustomerService } from 'src/app/_service/customer/customer.service';
import { EmployeeService } from 'src/app/_service/employee/employee.service';
import { SaleOrderService } from 'src/app/_service/saleOrder/sale-order.service';
import { FileAttach } from 'src/app/_models/file_attach';
import { FileAttachService } from 'src/app/_service/file-attach.service';
import { MatDialog } from '@angular/material/dialog';
import { FileAttachDialogComponent } from 'src/app/file-attach-dialog/file-attach-dialog.component';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-sale-order-detail',
  templateUrl: './sale-order-detail.component.html',
  styleUrls: ['./sale-order-detail.component.css']
})
export class SaleOrderDetailComponent implements AfterViewInit {

  loading = false;
  isShowButton = false;
  employee!: Employee;
  customer!: Customer[];
  saleOrderHeader!: SaleOrderHeader;
  soHeaderView!: SaleOrderHeaderView;
  saleOrderInfo!: SaleOrderInfo[];
  fileAttach!: FileAttach[];
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
    private attach: FileAttachService,
    private route: ActivatedRoute,
    public dialog: MatDialog) 
    {
      this.getOrderHeader(this.route.snapshot.params.id);
      this.getOrderInfo(this.route.snapshot.params.id);
      this.getFileAttach(this.route.snapshot.params.id);
    }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  openDialog() {
    this.dialog.open(FileAttachDialogComponent, {data: {soId: this.route.snapshot.params.id}});
  }

  getOrderHeader(saleOrderID: any): void {
    this.loading = true;
    this.saleOrder.getHeaderById(saleOrderID).pipe(finalize(() => this.loading = false))
      .subscribe(response => {
        this.soHeaderView = response;
        this.getEmployee(this.soHeaderView.empId);
        this.getCustomer(this.soHeaderView.custId);
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

  getEmployee(empId: any) {
    this.emp.getEmployeeById(empId).pipe(finalize(() => this.loading = false)).subscribe(response => this.employee = response);
  }

  getCustomer(custId: any) {
    this.cust.getCustomer(custId).pipe(finalize(() => this.loading = false)).subscribe(res => this.customer = res);
  }

  getTotalCost() {
    return this.saleOrderInfo!.reduce((sum, value) => sum + value.goodAmnt!, 0);
  }

  getFileAttach(saleOrderID: number) {
    return this.attach.getFileAttachment(saleOrderID)
    .subscribe(e => 
      { 
        this.fileAttach = e;
        if(this.fileAttach.length > 0){
          this.isShowButton = true;
        }
      });
  }

}
