import {trigger, transition, animate, style} from '@angular/animations';

export const componentStatus = trigger('componentStatus', [
    transition(':enter', [style({opacity: 0}), animate('1000ms', style({ opacity: 1 }))]),
    //transition(':leave', [style({opacity: 1}), animate('1000ms', style({ opacity: 0 }))])
]);

