import {Component, OnInit} from '@angular/core';
import {JsonReaderService} from '../service/json-reader.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  mobile: string;
  mail: string;
  skype: string;
  facebook: string;
  linkedin: string;

  constructor(private jsonReaderService: JsonReaderService) {
  }

  ngOnInit() {
    this.jsonReaderService.readData().map(data => data.contacts).subscribe(data => {
      this.mail = data.mail;
      this.mobile = data.mobile;
      this.skype = data.skype;
      this.facebook = data.facebook;
      this.linkedin = data.linkedin;
    });
  }

}
