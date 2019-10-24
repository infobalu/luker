import { Component, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, IonRouterOutlet } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ToastController, AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  // set up hardware back button event.
  lastTimeBackPress = 0;
  timePeriodToExit = 2000;

  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;

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
    public toastController: ToastController
  ) {
    this.initializeApp();
    this.backButtonEvent();
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


  // active hardware back button
  backButtonEvent() {
    this.platform.backButton.subscribe(async () => {



      this.routerOutlets.forEach((outlet: IonRouterOutlet) => {

        console.log("==this.router.url= : " + this.router.url);
        if (outlet && outlet.canGoBack()) {
          outlet.pop();
          console.log("==INNN IFFFFFFF= : " );
        } else if (this.router.url === '/dashboard/homee') {
          if (new Date().getTime() - this.lastTimeBackPress < this.timePeriodToExit) {
            // this.platform.exitApp(); // Exit from app
            navigator['app'].exitApp(); // work in ionic 4

          } else {


            this.presentToast('Press back again to exit App', 'bottom');
            this.lastTimeBackPress = new Date().getTime();
          }
        }
      });
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
