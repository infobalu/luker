import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Network } from '@ionic-native/network/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/dashboard',
      icon: 'home'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private network: Network
  ) {
    this.initializeApp();

    this.network.onDisconnect().subscribe(() => {
      console.log('NO INTERNET')
      localStorage.setItem('internet', "0");
    });
  
     this.network.onConnect().subscribe(() => {
      console.log(' INTERNET')
      localStorage.setItem('internet', "1");
    });

  }


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
  
  
}
