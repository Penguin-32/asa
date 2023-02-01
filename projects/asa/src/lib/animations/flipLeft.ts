import AsaAnimation from "./asaAnimation";
import {AnimationKeyframesSequenceMetadata, keyframes, style} from "@angular/animations";

class FlipLeft extends AsaAnimation {
  buildKeyframes(): AnimationKeyframesSequenceMetadata {
    return keyframes([
      style({transform: 'rotateY(-90deg) rotateZ(-3deg)', offset: 0}),
      style({transform: 'rotateY(10deg) rotateZ(0deg)', offset: 0.95}),
      style({transform: 'rotateY(0deg) rotateZ(0deg)', offset: 1}),
    ]);
  }
}

export default FlipLeft;
