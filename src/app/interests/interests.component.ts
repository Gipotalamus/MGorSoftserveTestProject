import { Component, OnInit } from '@angular/core';
import {JsonReaderService} from '../service/json-reader.service';
import {componentStatus} from "../animation";

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css'],
  animations: [componentStatus],
  host: {'[@componentStatus]': ''}
})
export class InterestsComponent implements OnInit {

  interests: string[];

  constructor(private jsonReaderService: JsonReaderService) { }

  ngOnInit() {
    this.jsonReaderService.readData().subscribe(data => this.interests = data.interests);
  }

}
