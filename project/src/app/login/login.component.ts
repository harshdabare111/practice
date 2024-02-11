import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,HttpClientModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  newname:any;
  newaddress:any;
  newusername:any;
  newpassword:any
  url="https://locahost:3050/";
  msg:any
  constructor (private http:HttpClient)
  {

  }
  save(data:any)
{
     this.newname=data.value.name;
     this.newaddress=data.value.address;
     this.newusername=data.value.username;
     this.newpassword=data.value.password;

     this.http.post(this.url,{"name":data.value.name,"address":data.value.address,
     "username":data.value.username,"password":data.value.password}).subscribe((p)=>{
     this.msg=p;
}
)}}
