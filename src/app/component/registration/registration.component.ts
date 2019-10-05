import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  topics =['Angular','React','Vue']; 
  userModel = new User('','namrata@gmail.com','3456789','','morning',true);
  constructor() { }

  ngOnInit() {
  }

}
