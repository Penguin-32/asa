import AsaAnimation from "./asaAnimation";
import {AnimationKeyframesSequenceMetadata, keyframes, style} from "@angular/animations";

class ZoomIn extends AsaAnimation {
  buildKeyframes(): AnimationKeyframesSequenceMetadata {
    return keyframes([
      style({opacity: 0, scale: "0%", offset: 0}),
      style({opacity: 1, scale: "100%", offset: 1}),
    ]);
  }
}

export default ZoomIn;
