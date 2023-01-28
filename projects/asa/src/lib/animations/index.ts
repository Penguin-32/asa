import fadeInLeft from "./fadeInLeft";
import {AnimationMetadata} from "@angular/animations";

const Animations: Map<string, AnimationMetadata[]> = new Map<string, AnimationMetadata[]>();
Animations.set('fadeInLeft', fadeInLeft);

export default Animations;
