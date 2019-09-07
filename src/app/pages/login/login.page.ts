import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiService } from './../../services/api.service';
import { ToastController } from '@ionic/angular'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  firstForm: any;

  constructor(
    public menu: MenuController,
    private router: Router,
    private apiService: ApiService,
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
  }

  passwordvalidation(formcontrol) {
    if (formcontrol.value.length < 5) {
      return { "password": true };
    }
  }

  ionViewWillEnter() {
    this.menu.enable(false);
  }

  login(data) {
    let params = {
      email: data.value.emailid,
      password: data.value.password
    };

    this.apiService.postData('/user/login', params).subscribe(result => {
      console.log("=result= :"+JSON.stringify(result));
      if(result['status'] == "success") {
        localStorage.setItem('userDetails', JSON.stringify(result['data']['user']));
        // localStorage.setItem('userDetails', JSON.stringify(result['data']));
        if(result['data']['user']['employee_name']) {
          this.presentToast('Welcome ' + result['data']['user']['employee_name'], 'bottom');
        } else {
          this.presentToast('Welcome ' + result['data']['user']['contact_person'], 'bottom');
        }
        this.router.navigateByUrl('/dashboard');

      } else {
        this.presentToast('Username or password is incorrect', 'middle');
      }
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
