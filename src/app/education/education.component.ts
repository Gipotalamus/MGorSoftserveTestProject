import { Component, OnInit } from '@angular/core';
import {JsonReaderService} from '../service/json-reader.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educations: string[];

  constructor(private jsonReaderService: JsonReaderService) { }

  ngOnInit() {
    this.jsonReaderService.readData().subscribe(data => this.educations = data.education);
  }

}
