import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clenttype',
  templateUrl: './clenttype.page.html',
  styleUrls: ['./clenttype.page.scss'],
})
export class ClenttypePage implements OnInit {

  clientType: string = 'dealer';

  constructor(
    public menu: MenuController,
    private router: Router
    ) {}

  ngOnInit() {
  }

  radioChecked(val) {
    console.log('radioGroupChange : ', val);
    this.clientType = val;
    localStorage.setItem('clienttype', val);
  }

  addCheckin(){
    this.router.navigateByUrl('/create-check-in/' + this.clientType );
  }

}
