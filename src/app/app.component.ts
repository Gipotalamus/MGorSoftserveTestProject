import { Component } from '@angular/core';
import {trigger, transition, animate, style} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [trigger('componentStatus', [

      transition('* => *', [style({opacity: 0}), animate('1000ms ease-in')])
    ]
  )]
})
export class AppComponent {
  title = 'app works!';
}
