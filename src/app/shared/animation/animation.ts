import { animate, query, style, transition, trigger } from "@angular/animations";

export const fadeAnimation =
  trigger('fadeInOut', [
    transition('* <=> *', [

      query(':enter', [
        style({
          opacity: 0,
        }),
        animate('1s ease-in',
          style({
            'opacity': '1',
          }))
      ], { optional: true }),
      query(':leave', [
        style({
          opacity: 1,
        }),
        animate('1s ease-out',
          style({
            'opacity': '0',
          }))
      ], { optional: true })
    ])
  ]);
