import AsaAnimation from "./asaAnimation";
import {AnimationKeyframesSequenceMetadata, keyframes, style} from "@angular/animations";

class FadeInRight extends AsaAnimation {
  buildKeyframes(): AnimationKeyframesSequenceMetadata {
    return keyframes([
      style({opacity: 0, transform: 'translateX(50%)', offset: 0}),
      style({opacity: 1, transform: 'translateX(0)', offset: 1}),
    ]);
  }
}

export default FadeInRight;
