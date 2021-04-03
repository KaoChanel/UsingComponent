import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { stringify } from '@angular/compiler/src/util';
import { AuthService } from './../../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm!: FormGroup;
  private formSubmitAttempt: boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      company: ['', Validators.required]
    });
  }

  isFieldInvalid(field: string) {
    return (
      (!this.myForm.get(field)?.valid && this.myForm.get(field)?.touched) ||
      (this.myForm.get(field)?.untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    if (this.myForm.valid) {
      this.authService.login(this.myForm.value);
    }
    this.formSubmitAttempt = true;
  }
}
