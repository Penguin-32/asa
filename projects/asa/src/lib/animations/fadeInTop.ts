import AsaAnimation from "./asaAnimation";
import {AnimationKeyframesSequenceMetadata, keyframes, style} from "@angular/animations";

class FadeInTop extends AsaAnimation {
  buildKeyframes(): AnimationKeyframesSequenceMetadata {
    return keyframes([
      style({opacity: 0, transform: 'translateY(-30%)', offset: 0}),
      style({opacity: 1, transform: 'translateY(0)', offset: 1}),
    ]);
  }
}

export default FadeInTop;

