import {animate, AnimationMetadata, keyframes, query, style} from "@angular/animations";

const fadeInLeft: AnimationMetadata[] = [
  query('*', [
    animate('500ms ease-out',
      keyframes([
        style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
        style({opacity: 1, transform: 'translateX(0)', offset: 1}),
      ]),
    ),
  ])
];

export default fadeInLeft;
