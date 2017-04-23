import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {JsonReaderService} from "../service/json-reader.service";
import 'rxjs/add/operator/mergeMap'
import {trigger, transition, animate, style} from '@angular/animations';




@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css'],
  animations: [trigger('componentStatus', [

  transition('* => *', [style({opacity: 0}), animate('1000ms ease-in')])
  ]
  )]
})
export class GeneralComponent implements OnInit {

  dataText: string;
  componentStatus: string;

  constructor(private actavatedRoute: ActivatedRoute, private jsonReaderService: JsonReaderService) { }

  ngOnInit() {
    this.actavatedRoute.params.flatMap(params => {this.componentStatus = params['direction'];
      return this.jsonReaderService.readData(params['direction'])}).subscribe(data => this.dataText = data);
  }

}
