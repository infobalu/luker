import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { ApiService } from './../../services/api.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  showSeconfForm: boolean;
  firstForm: any;
  secondForm: any;
  firstFormData: any;
  secondFormData: any;

  constructor(
    private apiService: ApiService,
    private router: Router,
    public toastController: ToastController
  ) { }

  ngOnInit() {
    this.firstForm = new FormGroup({
      emailid: new FormControl("", Validators.compose([
        Validators.required,
        Validators.email
      ])),
      password: new FormControl("", this.passwordvalidation)
    });

    this.secondForm = new FormGroup({
      companyName: new FormControl("", Validators.compose([
        Validators.required
      ])),
      contactPerson: new FormControl("", Validators.compose([
        Validators.required
      ])),
      designation: new FormControl("", Validators.compose([
        Validators.required
      ])),
      email: new FormControl("", Validators.compose([
        Validators.required,
        Validators.email
      ])),
      contactNumber: new FormControl("", Validators.compose([
        Validators.required
      ])),
      country: new FormControl("", Validators.compose([
        Validators.required
      ])),
    });
  }

  passwordvalidation(formcontrol) {
    if (formcontrol.value.length < 5) {
      return { "password": true };
    }
  }

  firstFormSubmit(data) {
    this.showSeconfForm = true;
    this.firstFormData = data.value;
  }

  secondFormSubmit(data) {
    this.secondFormData = data.value;

    let params = {
      email: this.firstFormData.emailid,
      password: this.firstFormData.password,
      company_name: this.secondFormData.companyName,
      contact_person: this.secondFormData.contactPerson,
      designation: this.secondFormData.designation,
      work_email: this.secondFormData.email,
      contact_number: this.secondFormData.contactNumber,
      user_type: 'owner'
    };

    this.apiService.postData('/users', params).subscribe(result => {
      this.presentToast();
      localStorage.clear();
      this.router.navigateByUrl('/login');
    });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Registration completed succesfully. Please try to login',
      position: 'middle',
      duration: 2000
    });
    toast.present();
  }

}
