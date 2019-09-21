import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HTTP } from '@ionic-native/http/ngx';

declare var cordova;
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL = environment.service_URL;

  constructor(private http: HttpClient,private cordovahttp: HTTP) { }

  getData(url: string) {
    console.log('=URL = : ' + this.baseURL + url);
    return this.http.get(this.baseURL + url);
  }

  postData(url: string, params: any) {
    console.log('=URL = : ' + this.baseURL + url);
    console.log('=params = : ' + JSON.stringify(params));
    return this.http.post(this.baseURL + url, params);
  }

  postApi(url: any, payload: any, header: any) {
  }

}
