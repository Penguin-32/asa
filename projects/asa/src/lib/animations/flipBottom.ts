import AsaAnimation from "./asaAnimation";
import {AnimationKeyframesSequenceMetadata, keyframes, style} from "@angular/animations";

class FlipBottom extends AsaAnimation {
  buildKeyframes(): AnimationKeyframesSequenceMetadata {
    return keyframes([
      style({transform: 'rotateX(90deg) rotateZ(3deg)', offset: 0}),
      style({transform: 'rotateX(-10deg) rotateZ(0deg)', offset: 0.95}),
      style({transform: 'rotateX(0deg) rotateZ(0deg)', offset: 1}),
    ]);
  }
}

export default FlipBottom;
