import {Directive, ElementRef, HostListener, Input} from '@angular/core';
import {AnimationBuilder, AnimationMetadata, AnimationPlayer} from "@angular/animations";
import Animations from "../animations";

@Directive({
  selector: '[scrollAnimation]'
})
export class ScrollAnimationDirective {
  /**
   * The scroll position from bottom of the screen at which the animation should start.
   * The animation will start at this point and continue until the animationEnd point if the `progressBoundToScroll`
   * input is set to `true`. If it's set to `false`, the animation will trigger once and then stop.
   */
  @Input() animationStart: number = 200;
  /**
   * The scroll position from bottom of the screen at which the animation should end.
   * Only used if `progressBoundToScroll` is set to `true`.
   */
  @Input() animationEnd: number = 220;
  /**
   * If set to `true`, the animation will start at the `animationStart` point and continue until the `animationEnd`
   * point. This process will repeat as the user scrolls up and down the page, so the animation is reversed as the user
   * scrolls up the page. If set to `false`, the animation will trigger once the element reaches the `animationStart`
   * point and then stop.
   */
  @Input() progressBoundToScroll: boolean = false;
  /**
   * The animation to be played. This should be an array of Angular animations or animation name.
   */
  @Input() scrollAnimation: string | AnimationMetadata[] | undefined;

  /**
   * Whether the animation has already played. This is used to prevent the animation from playing multiple times
   * when the user scrolls up and down the page when `progressBoundToScroll` is set to `false`.
   * @private
   */
  private hasAnimationPlayed = false;
  /**
   * The animation player that will be used to play the animation.
   * @private
   */
  private animationPlayer: AnimationPlayer | undefined;
  /**
   * The scroll offset relative to the element from the bottom of the screen. This is used to determine when the
   * animation should start.
   * @private
   */
  private scrollOffset: number = 0;

  constructor(
    private animationBuilder: AnimationBuilder,
    private el: ElementRef
  ) {}

  ngOnInit() {
    // This directive only functions with the scrollAnimation input
    console.log(this.scrollAnimation);
    if (!this.scrollAnimation) {
      throw new Error('scrollAnimation directive requires an animation to be passed in');
    }

    // Check if the animationStart and animationEnd inputs are valid
    if (this.animationStart < 0) {
      throw new Error('animationStart must be greater than 0');
    }
    if (this.animationEnd < 0) {
      throw new Error('animationEnd must be greater than 0');
    }
    if (this.progressBoundToScroll && this.animationStart > this.animationEnd) {
      throw new Error('animationEnd must be greater than animationStart when progressBoundToScroll is true');
    }

    // Prepare the animation, if the animation is string then it will be converted to an animation metadata array
    if (typeof this.scrollAnimation === 'string') {
      this.scrollAnimation = Animations.get(this.scrollAnimation);

      if (!this.scrollAnimation) {
        throw new Error("Animation with key '" + this.scrollAnimation + "' not found");
      }
    }
  }

  ngAfterViewInit() {
    if (!this.animationPlayer) {
      this.animationPlayer = this.buildAnimationPlayer(this.scrollAnimation as AnimationMetadata[]);
    }
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   if (changes['animation'] && changes['animation'].currentValue !== undefined) {
  //     if (this.el) {
  //       this.animationPlayer = this.buildAnimationPlayer(changes['animation'].currentValue);
  //     }
  //   }
  //   if (changes['animateStart'] || changes['animateEnd']) {
  //     if (this.animationPlayer) {
  //       this.animateFromScroll(this.scrollOffset)
  //     }
  //   }
  // }

  @HostListener('window:scroll', ['$event'])
  private isScrolledIntoView(){
    if (this.el){
      const rect = this.el.nativeElement.getBoundingClientRect();
      this.scrollOffset = rect.top;
      this.animateFromScroll(window.innerHeight - rect.bottom);
    }
  }

  private buildAnimationPlayer(animation: AnimationMetadata | AnimationMetadata[]) {
    console.log('build')
    const animationFactory = this.animationBuilder.build(animation)
    const animationPlayer = animationFactory.create(this.el.nativeElement);
    animationPlayer.play();
    animationPlayer.pause();
    return animationPlayer;
  }

  private animateFromScroll(scrollOffset: number) {
    if (this.progressBoundToScroll) {
      if (scrollOffset >= this.animationStart) {
        const newPosition = (scrollOffset - this.animationStart) / this.animationEnd;
        this.animationPlayer?.setPosition(newPosition);
      } else {
        this.animationPlayer?.setPosition(0.0001);
      }
    } else {
      if (scrollOffset >= this.animationStart && !this.hasAnimationPlayed) {
        this.animationPlayer?.play();
        this.hasAnimationPlayed = true;
      }
    }
  }

}
