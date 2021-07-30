import { Component, OnInit } from '@angular/core';
import { _getOptionScrollPosition } from '@angular/material/core';
import { Option } from 'src/app/_models/option';
import { OptionService } from 'src/app/_service/option.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-option-setting',
  templateUrl: './option-setting.component.html',
  styleUrls: ['./option-setting.component.css']
})
export class OptionSettingComponent implements OnInit {
  public isLockPrice: string = 'N';
  public isLockPriceLower: string = 'N';
  public isLockCust: string = 'N';
  public isCheckCredit: string = 'N';
  public isLockStockLower: string = 'N';

  public option: Option[] = [];

  public alert = Swal.mixin({
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

  constructor(private optionService: OptionService) { }

  ngOnInit(): void {
    this.getOption();
  }

  onChangeLockPrice(value:any){
    console.log(value);
    this.option[0].isLockPrice = value;

    console.log("isLockPrice     : " + this.option[0].isLockPrice);
  }

  onChangeLockPriceLower(value:any){
    console.log(value);
    this.option[0].isLockPriceLower = value;

    console.log("isLockPriceLower: " + this.option[0].isLockPriceLower);
  }

  onChangeLockCust(value:any){
    console.log(value);
    this.option[0].isLockCust = value;

    console.log("isLockCust      : " + this.option[0].isLockCust);
  }

  onChangeCheckCredit(value:any){
    console.log(value);
    this.option[0].isCheckCredit = value;

    console.log("isCheckCredit   : " + this.option[0].isCheckCredit);
  }

  onChangeLockStockLower(value:any){
    console.log(value);
    this.option[0].isLockStockLower = value;

    console.log("isLockStockLower: " + this.option[0].isLockStockLower);
  }

  getOption(): void {
    const optionObservable = this.optionService.getOption();
    optionObservable.subscribe((element: Option[]) => {
      this.option = element;
      this.setOption(this.option[0]);
    });
  }

  setOption(data: Option): void {
    this.isLockPrice = data.isLockPrice;
    this.isLockPriceLower = data.isLockPriceLower;
    this.isLockCust = data.isLockCust;
    this.isCheckCredit = data.isCheckCredit;
    this.isLockStockLower = data.isLockStockLower;
  }

  updateOption(){
    var obj = this.option[0];
    obj.isLockPrice = this.isLockPrice;
    obj.isLockPriceLower = this.isLockPriceLower;
    obj.isLockCust = this.isLockCust;
    obj.isCheckCredit = this.isCheckCredit;
    obj.isLockStockLower = this.isLockStockLower;

    console.log(JSON.stringify(obj));

    this.optionService.putOption(obj).subscribe(e => {
      this.getOption();
      this.alert.fire({title: 'บันทึกตั้งค่าเรียบร้อย', icon: 'success'});
    });
  }

}
