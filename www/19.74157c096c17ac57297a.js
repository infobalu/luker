(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"H+bZ":function(l,n,u){"use strict";u.d(n,"a",function(){return c});var t=u("AytR"),o=u("yp2w"),i=u("CcnG"),e=u("t/Na"),c=function(){function l(l,n){this.http=l,this.cordovahttp=n,this.baseURL=t.a.service_URL}return l.prototype.getData=function(l){return console.log("=URL = : "+this.baseURL+l),this.http.get(this.baseURL+l)},l.prototype.postData=function(l,n){return console.log("=URL = : "+this.baseURL+l),console.log("=params = : "+JSON.stringify(n)),this.http.post(this.baseURL+l,n)},l.prototype.postApi=function(l,n,u){},l.ngInjectableDef=i.S({factory:function(){return new l(i.W(e.c),i.W(o.a))},token:l,providedIn:"root"}),l}()},RfXZ:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),o=u("mrSG"),i=u("H+bZ"),e=u("ZZ/e"),c=function(){function l(l,n){this.apiService=l,this.toastController=n,this.activeCheckins=[],this.count=""}return l.prototype.ngOnInit=function(){},l.prototype.ionViewWillEnter=function(){var l=this;this.userDetails=JSON.parse(localStorage.getItem("userDetails")),console.log("= this.userDetails['_id']== : "+this.userDetails._id),this.apiService.getData("/getCheckins/"+this.userDetails._id).subscribe(function(n){l.activeCheckins=n.data,console.log("== this.activeCheckins == : "+JSON.stringify(l.activeCheckins)),1==n.success&&(l.count=n.checkins,console.log("===this.count= : "+l.count))})},l.prototype.presentToast=function(l,n){return o.b(this,void 0,void 0,function(){return o.e(this,function(u){switch(u.label){case 0:return[4,this.toastController.create({message:l,position:n,duration:2e3})];case 1:return u.sent().present(),[2]}})})},l}(),b=function(){return function(){}}(),r=u("pMnS"),s=u("oBZk"),a=u("Ip0R"),p=t.nb({encapsulation:0,styles:[[""]],data:{}});function h(l){return t.Eb(0,[(l()(),t.pb(0,0,null,null,33,"ion-item",[["type","item-text-wrap"]],null,null,null,s.Z,s.r)),t.ob(1,49152,null,0,e.G,[t.h,t.k],{type:[0,"type"]},null),(l()(),t.pb(2,0,null,0,31,"ion-card",[["background-color:",""]],null,null,null,s.Q,s.e)),t.ob(3,49152,[["BEBEBE;",4]],0,e.l,[t.h,t.k],null,null),(l()(),t.pb(4,0,null,0,4,"ion-card-header",[],null,null,null,s.N,s.g)),t.ob(5,49152,null,0,e.n,[t.h,t.k],null,null),(l()(),t.pb(6,0,null,0,2,"ion-card-subtitle",[],null,null,null,s.O,s.h)),t.ob(7,49152,null,0,e.o,[t.h,t.k],null,null),(l()(),t.Db(8,0,["",""])),(l()(),t.pb(9,0,null,0,24,"ion-card-content",[],null,null,null,s.M,s.f)),t.ob(10,49152,null,0,e.m,[t.h,t.k],null,null),(l()(),t.pb(11,0,null,0,2,"ion-label",[],null,null,null,s.ab,s.s)),t.ob(12,49152,null,0,e.M,[t.h,t.k],null,null),(l()(),t.Db(13,0,["Rep : ",""])),(l()(),t.pb(14,0,null,0,4,"ion-item",[],null,null,null,s.Z,s.r)),t.ob(15,49152,null,0,e.G,[t.h,t.k],null,null),(l()(),t.pb(16,0,null,0,2,"ion-label",[],null,null,null,s.ab,s.s)),t.ob(17,49152,null,0,e.M,[t.h,t.k],null,null),(l()(),t.Db(18,0,["Checkin Type : ",""])),(l()(),t.pb(19,0,null,0,4,"ion-item",[],null,null,null,s.Z,s.r)),t.ob(20,49152,null,0,e.G,[t.h,t.k],null,null),(l()(),t.pb(21,0,null,0,2,"ion-label",[],null,null,null,s.ab,s.s)),t.ob(22,49152,null,0,e.M,[t.h,t.k],null,null),(l()(),t.Db(23,0,["Checkin Time : ",""])),(l()(),t.pb(24,0,null,0,4,"ion-item",[],null,null,null,s.Z,s.r)),t.ob(25,49152,null,0,e.G,[t.h,t.k],null,null),(l()(),t.pb(26,0,null,0,2,"ion-label",[],null,null,null,s.ab,s.s)),t.ob(27,49152,null,0,e.M,[t.h,t.k],null,null),(l()(),t.Db(28,0,["Location: "," "])),(l()(),t.pb(29,0,null,0,4,"ion-item",[],null,null,null,s.Z,s.r)),t.ob(30,49152,null,0,e.G,[t.h,t.k],null,null),(l()(),t.pb(31,0,null,0,2,"ion-label",[],null,null,null,s.ab,s.s)),t.ob(32,49152,null,0,e.M,[t.h,t.k],null,null),(l()(),t.Db(33,0,["Checkout Time : ",""]))],function(l,n){l(n,1,0,"item-text-wrap")},function(l,n){l(n,8,0,n.context.$implicit.create_date),l(n,13,0,n.context.$implicit.customer_name),l(n,18,0,n.context.$implicit.check_in_for),l(n,23,0,n.context.$implicit.checkin_time),l(n,28,0,n.context.$implicit.checkin_loc),l(n,33,0,n.context.$implicit.checkout_time)})}function k(l){return t.Eb(0,[(l()(),t.pb(0,0,null,null,6,"ion-header",[],null,null,null,s.V,s.n)),t.ob(1,49152,null,0,e.A,[t.h,t.k],null,null),(l()(),t.pb(2,0,null,0,4,"ion-toolbar",[["color","primary"]],null,null,null,s.pb,s.H)),t.ob(3,49152,null,0,e.Ab,[t.h,t.k],{color:[0,"color"]},null),(l()(),t.pb(4,0,null,0,2,"ion-title",[],null,null,null,s.nb,s.F)),t.ob(5,49152,null,0,e.yb,[t.h,t.k],null,null),(l()(),t.Db(-1,0,["My Check-ins"])),(l()(),t.pb(7,0,null,null,7,"ion-content",[],null,null,null,s.S,s.k)),t.ob(8,49152,null,0,e.t,[t.h,t.k],null,null),(l()(),t.pb(9,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),t.Db(10,null,[" \xa0 \xa0 \xa0Total checkin pending : ",""])),(l()(),t.pb(11,0,null,0,3,"ion-list",[],null,null,null,s.cb,s.t)),t.ob(12,49152,null,0,e.N,[t.h,t.k],null,null),(l()(),t.gb(16777216,null,0,1,null,h)),t.ob(14,278528,null,0,a.i,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var u=n.component;l(n,3,0,"primary"),l(n,14,0,u.activeCheckins)},function(l,n){l(n,10,0,n.component.count)})}function f(l){return t.Eb(0,[(l()(),t.pb(0,0,null,null,1,"app-mycheckins",[],null,null,null,k,p)),t.ob(1,114688,null,0,c,[i.a,e.Nb],null,null)],function(l,n){l(n,1,0)},null)}var m=t.lb("app-mycheckins",c,f,{},{},[]),g=u("gIcY"),d=u("ZYCi");u.d(n,"MycheckinsPageModuleNgFactory",function(){return w});var w=t.mb(b,[],function(l){return t.vb([t.wb(512,t.j,t.bb,[[8,[r.a,m]],[3,t.j],t.x]),t.wb(4608,a.l,a.k,[t.u,[2,a.r]]),t.wb(4608,g.r,g.r,[]),t.wb(4608,e.b,e.b,[t.z,t.g]),t.wb(4608,e.Fb,e.Fb,[e.b,t.j,t.q,a.c]),t.wb(4608,e.Ib,e.Ib,[e.b,t.j,t.q,a.c]),t.wb(1073742336,a.b,a.b,[]),t.wb(1073742336,g.p,g.p,[]),t.wb(1073742336,g.g,g.g,[]),t.wb(1073742336,e.Cb,e.Cb,[]),t.wb(1073742336,d.p,d.p,[[2,d.v],[2,d.m]]),t.wb(1073742336,b,b,[]),t.wb(1024,d.k,function(){return[[{path:"",component:c}]]},[])])})}}]);