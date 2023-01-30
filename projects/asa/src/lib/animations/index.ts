import fadeInLeft from "./fadeInLeft";
import AsaAnimation from "./asaAnimation";
import FadeInLeft from "./fadeInLeft";
import FadeInRight from "./fadeInRight"
import FadeIn from "./fadeIn";
import FadeInBottom from "./fadeInBottom";
import FadeInTop from "./fadeInTop";
import FlipRight from "./flipRight";
import FlipLeft from "./flipLeft";
import FlipBottom from "./flipBottom";
import FlipTop from "./flipTop";
import ZoomIn from "./zoomIn";
import ZoomOut from "./zoomOut";



const Animations: Map<string, AsaAnimation> = new Map<string, AsaAnimation>();
Animations.set('fadeInLeft', new FadeInLeft());
Animations.set('fadeIn', new FadeIn());
Animations.set('fadeInRight', new FadeInRight());
Animations.set('fadeInBottom', new FadeInBottom());
Animations.set('fadeInTop', new FadeInTop());
Animations.set('flipRight', new FlipRight());
Animations.set('flipLeft', new FlipLeft());
Animations.set('flipBottom', new FlipBottom());
Animations.set('flipTop', new FlipTop());
Animations.set('zoomIn', new ZoomIn());
Animations.set('zoomOut', new ZoomOut());







export default Animations;
