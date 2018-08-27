import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';
import { SignUpComponent } from './sign-up/sign-up.component';

import { Employee } from './employee';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MyserviceService],
}) 

export class AppComponent implements OnInit{
  title = 'ApiAngular';
  onsubmit=function(user){
  console.log(user);}
   constructor(private service:MyserviceService){ }
 
  ngOnInit(){
    // this.service.postdata().subscribe(
    //   datas => console.log(datas)
   // );

    // this.service.getdata().subscribe(
    //   datas => console.log(datas)
    // );

  }
}
