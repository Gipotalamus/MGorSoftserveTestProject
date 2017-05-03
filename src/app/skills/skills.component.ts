import { Component, OnInit } from '@angular/core';
import {JsonReaderService} from '../service/json-reader.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  languages: string[];
  frameworks: string[];
  databases: string[];
  vcs: string[];
  os: string[];

  constructor(private jsonReaderService: JsonReaderService) { }

  ngOnInit() {
    this.jsonReaderService.readData().map(data => data.skills).subscribe(data => {
      this.languages = data.languages;
      this.frameworks = data.frameworks;
      this.databases = data.databases;
      this.vcs = data.vcs;
      this.os = data.os;
    });
  }

}
