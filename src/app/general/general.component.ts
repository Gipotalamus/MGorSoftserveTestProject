import { Component, OnInit } from '@angular/core';
import {JsonReaderService} from '../service/json-reader.service';
import {fadeInAnimation} from '../animation';

@Component({
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class GeneralComponent implements OnInit {

  generalInfo: string;

  constructor(private jsonReaderService: JsonReaderService) { }

  ngOnInit() {
      this.jsonReaderService.readData().subscribe(data => this.generalInfo = data.general.story);
  }
}
