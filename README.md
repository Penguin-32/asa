# ASA - Angular Scroll Animations

Versatile library to easily animate elements as user scrolls down the page.

## Installation

- With NPM:
```bash
npm install @penguin32/asa --save
```

in your Angular project.

## Usage

- Import the `AsaModule` into the module wherever you want to use it:
```typescript
import { AsaModule } from '@penguin32/asa';

@NgModule({
  imports: [
    // ...
    AsaModule
  ]
})
export class AppModule { }
```

### Using included animations
This library comes with a handful of animations included. You can use them by passing the name of the animation
as a string parameter to the `[scrollAnimation]` directive. The full list of available animations is available later in this document.

- Add the `[scrollAnimation]` directive to the element you want to animate:
```html
<div [scrollAnimation]="'fadeInLeft'">
  <h1> When user scrolls to this currently invisible element </h1>
  <p> it will fade in and make it's entry to the page! </p>
</div>
```

### Using custom animations
You can also create your own animations and use them with this library. To do so, you need to create field in your component
that will hold the animation configuration as a `AnimationMetadata[]` object. You can then pass this field to the `[scrollAnimation]` directive.

- Create a field in your component that will hold the animation configuration:
```typescript
import {animate, AnimationMetadata, keyframes, query, style} from "@angular/animations";

const customAnimationExample: AnimationMetadata[] = [
  query('*', [
    animate('500ms ease-out',
      keyframes([
        style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
        style({opacity: 1, transform: 'translateX(0)', offset: 1}),
      ]),
    ),
  ])
];
```

- Add the `[scrollAnimation]` directive to the element you want to animate:
```html
<div [scrollAnimation]="customAnimationExample">
  <h1> Custom Animation example </h1>
  <p> This is a very cool way to animate-in a element into the page! </p>
</div>
```

### Bind animation progress to scroll position
You can also bind the animation progress to the scroll position. This is a cool way to animate-in and out elements as user scrolls up and down the page.

- Add the `[progressBoundToScroll]` input to the element you want to animate:
```html
<div [scrollAnimation]="'fadeInLeft'" [progressBoundToScroll]="true">
  <h1> This element will animate-in and out as user scrolls up and down the page </h1>
  <p> This is awesome! </p>
</div>
```

If `[progressBoundToScroll]` is set to `false`, the animation will be triggered only once and will not be triggered again as user scrolls up and down the page,
and the element will stay visible once animated.

If the `[progressBouldToScroll]` is set to `true`, both `[animationStart]` and `[animationEnd]` will be used, as the animation is bound to the scroll position.
On the other hand, if it's set to `false`, only `[animationStart]` will be used, as the animation will be triggered when the element is `animationStart` pixels
from the bottom of the page.

## Available settings
| Directive               | Type                           | Required  | Default     | Description                                                                                                                                                                                            |
|-------------------------|--------------------------------|-----------|-------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [scrollAnimation]       | `string` `AnimationMetadata[]` | Yes       | `undefined` | Name of the included animation to use or custom Angular animation.                                                                                                                                     |
| [progressBoundToScroll] | `boolean`                      | No        | `false`     | If set to `true`, the animation progress (0 - 100%) will be bound to the scroll position (`[animationStart]` - `[animationEnd]`), otherwise the animation will trigger only once on `[animationStart]` |
| [animationStart]        | `number`                       | No        | `200`       | Distance from the bottom of the page when the animation should trigger.                                                                                                                                |
| [animationEnd]          | `number`                       | No        | `220`       | Distance from the bottom of the page when the animation should end. Used only when `[progessBoundToScroll]` is `true`.                                                                                 |
| [duration]              | `string`                       | No        | `'500ms'`   | Duration of the animation in CSS time.                                                                                                                                                                 |
| [curve]                 | `string`                       | No        | `'ease-out'`| CSS curve of the animation to be used                                                                                                                                                                  |

## Included animations
### Fade
- `fadeIn`
- `fadeInLeft`
- `fadeInRight`
- `fadeInTop`
- `fadeInBottom`
### Flip
- `flipLeft`
- `flipRight`
- `flipTop`
- `flipBottom`
### Zoom
- `zoomIn`
- `zoomOut`
