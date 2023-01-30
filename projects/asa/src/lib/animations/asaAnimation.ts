import {
  animate,
  AnimationKeyframesSequenceMetadata,
  AnimationMetadata,
  query, stagger,
} from "@angular/animations";

abstract class AsaAnimation {
  private _duration = "500ms";
  private _stagger?: string;
  private _curve = "ease-out";

  // Setters

  set duration(value: string) {
    this._duration = value;
  }

  set stagger(value: string) {
    this._stagger = value;
  }

  set curve(value: string) {
    this._curve = value;
  }

  abstract buildKeyframes(): AnimationKeyframesSequenceMetadata;

  public compileAnimation(): AnimationMetadata[] {
    if (this._stagger) {
      return [
        query('*', [
          stagger(this._stagger,
            animate(`${this._duration} ${this._curve}`,
              this.buildKeyframes()
            ),
          ),
        ])
      ];
    }
    return [
      query('*', [
        animate(`${this._duration} ${this._curve}`,
          this.buildKeyframes()
        ),
      ])
    ];
  }
}

export default AsaAnimation;
