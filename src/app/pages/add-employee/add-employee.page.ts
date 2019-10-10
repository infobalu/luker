import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { ApiService } from './../../services/api.service';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ToastController, LoadingController } from '@ionic/angular';
import { File, FileEntry } from '@ionic-native/file/ngx';

declare var cordova;


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.page.html',
  styleUrls: ['./add-employee.page.scss'],
})
export class AddEmployeePage implements OnInit {

  firstForm: any;
  base64Image: any;
  userDetails: any;
  capturedPhoto: any;
  loading: any;
  internetstatus: any;

  constructor(
    private apiService: ApiService,
    private router: Router,
    public toastController: ToastController,
    private camera: Camera,
    public loadingController: LoadingController,
    private file: File
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
      startTime: new FormControl("09:30 am", Validators.compose([
        Validators.required
      ])),
      endTime: new FormControl("06:30 pm", Validators.compose([
        Validators.required
      ])),
      // pic: new FormControl(""),
      // type: new FormControl("", Validators.compose([
      //   Validators.required
      // ])),

      empno: new FormControl("", Validators.compose([
        Validators.required
      ])),
      location: new FormControl("", Validators.compose([
        Validators.required
      ])),
      employee_area: new FormControl("", Validators.compose([
        Validators.required
      ])),
      type: new FormControl("", Validators.compose([
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
      employee_no: data.value.empno,
      employee_post_location: data.value.location,
      employee_area: data.value.employee_area,
      employee_vertical: 'test',

    };

    this.internetstatus = localStorage.getItem("internet");
    if (this.internetstatus == '1') {

      this.apiService.postData('/users', params).subscribe(result => {

        console.log('==result= : ' + JSON.stringify(result));

        this.presentToast("Employee added successfully", "bottom");
        this.router.navigateByUrl('/dashboard');
      }, error => {
        alert(JSON.stringify(error));
      });
    } else {
      alert('Please check your internet connection');
    }
  }

  async presentToast(msg, position) {
    const toast = await this.toastController.create({
      message: msg,
      position: position,
      duration: 2000
    });
    toast.present();
  }

  uploadImages(path: any) {
    let _self = this;
    cordova.plugin.http.uploadFile('https://dev.salesblazon.co:8080/uploadImage', {},
      { 'checkin_id': path }, this.base64Image, 'image', function (response) {
        console.log('response', JSON.stringify(response));
        _self.router.navigateByUrl('/dashboard');
      }, function (response) {
        console.error(response.error);
        _self.dismissLoading();
      });
  }

  async uploadFromCamera() {
    const options: CameraOptions = {
      quality: 80,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    try {
      const cameraInfo = await this.camera.getPicture(options);
      const blobInfo = await this.makeFileIntoBlob(cameraInfo);
      this.base64Image = cameraInfo;

      this.capturedPhoto = blobInfo;
      console.log('this.capturedPhoto', this.capturedPhoto);
    } catch (e) {
      console.log(e.message);
      console.log('File Upload Error ' + e.message);
    }
  }


  async dismissLoading() {
    this.loadingController.dismiss();
    console.log('Loading dismissed!');
  }


  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Please Wait...',
    });
    await this.loading.present();
  }


  makeFileIntoBlob(filePath) {
    // INSTALL PLUGIN - cordova plugin add cordova-plugin-file
    return new Promise((resolve, reject) => {
      let fileName = '';
      this.file.resolveLocalFilesystemUrl(filePath).then(fileEntry => {
        const { name, nativeURL } = fileEntry;
        // get the path..
        const path = nativeURL.substring(0, nativeURL.lastIndexOf('/'));
        console.log('path', path);
        console.log('fileName', name);
        fileName = name;
        // we are provided the name, so now read the file into
        // a buffer
        return this.file.readAsArrayBuffer(path, name);
      })
        .then(buffer => {
          // get the buffer and make a blob to be saved
          const imgBlob = new Blob([buffer], {
            type: 'image/jpeg'
          });
          console.log(imgBlob.type, imgBlob.size);
          resolve({ fileName, imgBlob });
        })
        .catch(e => reject(e));
    });
  }

}
