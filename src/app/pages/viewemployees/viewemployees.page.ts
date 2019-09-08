import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-viewemployees',
  templateUrl: './viewemployees.page.html',
  styleUrls: ['./viewemployees.page.scss'],
})
export class ViewemployeesPage implements OnInit {
  activeCheckins: any = [];

  constructor(private apiService: ApiService,
    public toastController: ToastController) { }

  ngOnInit() {

    this.apiService.getData('/users').subscribe(result => {
      this.activeCheckins = result['data'];
      console.log("== this.activeCheckins == : "+  JSON.stringify(this.activeCheckins));
    });

  }

}
