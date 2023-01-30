import AsaAnimation from "./asaAnimation";
import {AnimationKeyframesSequenceMetadata, keyframes, style} from "@angular/animations";

class FadeIn extends AsaAnimation {
  buildKeyframes(): AnimationKeyframesSequenceMetadata {
    return keyframes([
      style({opacity: 0, offset: 0}),
      style({opacity: 1, offset: 1}),
    ]);
  }
}

export default FadeIn;
