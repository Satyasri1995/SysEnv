import { environment } from './../environments/environment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SysEnv';
  path!:string;
  temp!:string;
  tmp!:string;

  ngOnInit(){
    this.path=environment.Path;
    this.temp=environment.TEMP;
    this.tmp=environment.TMP;
  }

}
