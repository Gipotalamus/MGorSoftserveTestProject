import { Component, OnInit } from '@angular/core';
import {JsonReaderService} from '../service/json-reader.service';
import {componentStatus} from "../animation";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [componentStatus],
  host: {'[@componentStatus]': ''}
})
export class SkillsComponent implements OnInit {

  languages: string[];
  frameworks: string[];
  databases: string[];
  vcs: string[];
  git: string;

  constructor(private jsonReaderService: JsonReaderService) { }

  ngOnInit() {
    this.jsonReaderService.readData().map(data => data.skills).subscribe(data => {
      this.languages = data.languages;
      this.frameworks = data.frameworks;
      this.databases = data.databases;
      this.vcs = data.vcs;
      this.git = data.git;
    });
  }

}
