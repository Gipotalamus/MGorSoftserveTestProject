import { trigger, style, transition, animate} from '@angular/animations';

export const fadeInAnimation = trigger('fadeInAnimation', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('1s', style({ opacity: 1 }))
    ]),
  ]);


