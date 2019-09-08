import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { ApiService } from './../../services/api.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.page.html',
  styleUrls: ['./add-employee.page.scss'],
})
export class AddEmployeePage implements OnInit {

  firstForm: any;
  userDetails: any;

  constructor(
    private apiService: ApiService,
    private router: Router,
    public toastController: ToastController
  ) { }

  ngOnInit() {
    this.userDetails = JSON.parse(localStorage.getItem("userDetails"));

    this.firstForm = new FormGroup({
      username: new FormControl("", Validators.compose([
        Validators.required,
        Validators.email
      ])),
      password: new FormControl("", Validators.compose([
        Validators.required
      ])),
      ename: new FormControl("", Validators.compose([
        Validators.required
      ])),
      accountEmail: new FormControl("", Validators.compose([
        Validators.email
      ])),
      mobile: new FormControl(""),
      designation: new FormControl(""),
      startTime: new FormControl("10:00 am", Validators.compose([
        Validators.required
      ])),
      endTime: new FormControl("05:00 pm", Validators.compose([
        Validators.required
      ])),
      // pic: new FormControl(""),
      // type: new FormControl("", Validators.compose([
      //   Validators.required
      // ])),

      empno: new FormControl("", Validators.compose([
        Validators.required
      ])),
    });
  }

  firstFormSubmit(data) {
    console.log("= data.value.empno== : " + data.value.empno);

    let params = {
      email: data.value.username,
      password: data.value.password,
      employee_name: data.value.ename,
      employee_account_email: data.value.accountEmail,
      employee_mobile: data.value.mobile,
      employee_designation: data.value.designation,
      employee_shift_start: data.value.startTime,
      employee_shift_end: data.value.endTime,
      employee_type: data.value.type,
      user_type: 'employee',
      added_by: this.userDetails._id,
      employee_post_location: 'palakkad',
      employee_no: data.value.empno
    };

    this.apiService.postData('/users', params).subscribe(result => {

      console.log('==result= : ' + JSON.stringify(result));

      this.presentToast("Employee added successfully", "bottom");
      this.router.navigateByUrl('/dashboard');
    }, error => {
      alert(JSON.stringify(error));
    });
  }

  async presentToast(msg, position) {
    const toast = await this.toastController.create({
      message: msg,
      position: position,
      duration: 2000
    });
    toast.present();
  }

}
