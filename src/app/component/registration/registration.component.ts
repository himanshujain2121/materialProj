import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  topics =['Angular','React','Vue']; 
  userModel = new User('jim','namrata@gmail.com','5426321456','default','morning',true);

  topicHasError = true;

  validateTopic(value){
    if(value === 'default'){
      this.topicHasError = true;
    }
    else{
      this.topicHasError = false;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
