import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiService } from './../../services/api.service';
import { ToastController, AlertController } from '@ionic/angular';
import * as moment from 'moment';


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
    public toastController: ToastController,
    public alertController: AlertController
  ) { }

  ngOnInit() {

    let time1 = new Date(1570453660052);
    console.log('==time1 = : ' + time1);
    let time2 = new Date();
    console.log('==time2 = : ' + time2);
    
     this.diff_minutes(time2, time1); 


    this.firstForm = new FormGroup({
      emailid: new FormControl("", Validators.compose([
        Validators.required,
        Validators.email
      ])),
      password: new FormControl("", this.passwordvalidation)
    });
  }



  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'SalesBlazon!',
      message: 'ERRRRRRROR!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
            navigator['app'].exitApp();

          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            navigator['app'].exitApp();

          }
        }
      ]
    });

    await alert.present();
  }



  diff_minutes(dt2, dt1) {

    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= 60;
    var diffHr = Math.abs(dt1.getTime() - dt2.getTime()) / 3600000;
    console.log('==diffHr== : ' + diffHr);
    console.log('==diff== : ' + diff);
    if (diff > 10000) {
      this.presentAlertPrompt();
    }

    return Math.abs(Math.round(diff));

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
      console.log("=result= :" + JSON.stringify(result));
      if (result['status'] == "success") {
        localStorage.setItem('userDetails', JSON.stringify(result['data']['user']));
        // localStorage.setItem('userDetails', JSON.stringify(result['data']));
        if (result['data']['user']['employee_name']) {
          this.presentToast('Welcome ' + result['data']['user']['employee_name'], 'bottom');
        } else {
          this.presentToast('Welcome ' + result['data']['user']['contact_person'], 'bottom');
        }
        console.log("dash=======11111");
        this.router.navigateByUrl('/dashboard');
        console.log("dash=======2222222222");

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
