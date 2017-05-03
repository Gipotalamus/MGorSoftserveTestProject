import { Component, OnInit } from '@angular/core';
import {JsonReaderService} from '../service/json-reader.service';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  generalInfo: string;

  constructor(private jsonReaderService: JsonReaderService) { }

  ngOnInit() {
      this.jsonReaderService.readData().subscribe(data => this.generalInfo = data.general.story);
  }

}
