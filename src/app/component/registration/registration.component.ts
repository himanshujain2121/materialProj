import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { EnrolmentService } from '../../service/enrolment/enrolment.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  topics = ['Angular', 'React', 'Vue'];
  userModel = new User('jim', 'namrata@gmail.com', '5426321456', 'default', 'morning', true);
  topicHasError = true;
  errorMsg = '';

  constructor(private enrollService: EnrolmentService) { }
  ngOnInit() {
  }

  validateTopic(value) {
    if (value === 'default') {
      this.topicHasError = true;
    }
    else {
      this.topicHasError = false;
    }
  }

  onSubmit() {
    // console.log(this.userModel);
    this.enrollService.enroll(this.userModel)
      .subscribe(
        data => console.log('success', data),
        err => this.errorMsg = err.statusText
      )
  }


}
