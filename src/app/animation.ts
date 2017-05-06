import { trigger, style, transition, animate } from '@angular/animations';

export const fadeInAnimation =
  trigger('fadeInAnimation', [
    // route 'enter' transition
    transition(':enter', [

      // styles at start of transition
      style({ opacity: 0 }),

      // animation and styles at end of transition
      animate('0.8s ease-out', style({ opacity: 1 }))
    ]),
  ]);

