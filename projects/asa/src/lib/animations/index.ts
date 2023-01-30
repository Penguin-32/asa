import fadeInLeft from "./fadeInLeft";
import AsaAnimation from "./asaAnimation";
import FadeInLeft from "./fadeInLeft";

const Animations: Map<string, AsaAnimation> = new Map<string, AsaAnimation>();
Animations.set('fadeInLeft', new FadeInLeft());

export default Animations;
