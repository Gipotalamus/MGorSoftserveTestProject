import { Component, OnInit } from '@angular/core';
import {JsonReaderService} from '../service/json-reader.service';
import {componentStatus} from "../animation";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  animations: [componentStatus],
  host: {'[@componentStatus]': ''}
})
export class EducationComponent implements OnInit {

  educations: string[];

  constructor(private jsonReaderService: JsonReaderService) { }

  ngOnInit() {
    this.jsonReaderService.readData().subscribe(data => this.educations = data.education);
  }

}
