import * as React from 'react';
import { Callout } from './Callout';
import { CalloutContent } from './CalloutContent';
import { DirectionalHint } from '../../common/DirectionalHint';
import {
  IPoint,
  IRectangle
} from '../../Utilities';

export interface ICalloutProps extends React.Props<Callout | CalloutContent> {

  /**
   * The target that the Callout should try to position itself based on.
   * It can be either an HTMLElement a querySelector string of a valid HTMLElement
   * or a MouseEvent. If MouseEvent is given then the origin point of the event will be used.
   */
  target?: HTMLElement | string | MouseEvent;

  /**
   * How the element should be positioned
   * @default DirectionalHint.BottomAutoEdge
   */
  directionalHint?: DirectionalHint;

  /**
   * The gap between the Callout and the target
   * @default 16
   */
  gapSpace?: number;

  /**
   * The width of the beak.
   * @default 16
   */
  beakWidth?: number;

  /**
  * The color of the beak.
  * @default #ffffff
  */
  beakColor?: string;

  /**
   * The bounding rectangle for which  the contextual menu can appear in.
   */
  bounds?: IRectangle;

  /**
   * If true use a point rather than rectangle to position the Callout.
   * For example it can be used to position based on a click.
   */
  useTargetPoint?: boolean;

  /**
   * Point used to position the Callout
   */
  targetPoint?: IPoint;

  /**
   * If true then the beak is visible. If false it will not be shown.
   * @default false
   */
  isBeakVisible?: boolean;

  /**
   * If true the position returned will have the menu element cover the target.
   * If false then it will position next to the target;
   * @default false
   */
  coverTarget?: boolean;

  /**
   * CSS class to apply to the callout.
   * @default null
   */
  className?: string;

  /**
   * Optional callback when the layer content has mounted.
   */
  onLayerMounted?: () => void;

  /**
   * Optional callback that is called once the callout has been correctly positioned.
   */
  onPositioned?: () => void;

  /**
   * Callback when the Callout tries to close.
   */
  onDismiss?: (ev?: any) => void;

  /**
   * If true do not render on a new layer. If false render on a new layer.
   */
  doNotLayer?: boolean;

  /**
   * If true the position will not change sides in an attempt to fit the callout within bounds.
   * It will still attempt to align it to whatever bounds are given.
   * @default false
   */
  directionalHintFixed?: boolean;

  /**
   * If true then the callout will attempt to focus the first focusable element that it contains.
   * If it doesn't find an element, no focus will be set and the method will return false.
   * This means that it's the contents responsibility to either set focus or have
   * focusable items.
   * @returns True if focus was set, false if it was not.
   */
  setInitialFocus?: boolean;

  /**
    * @deprecated
    * Deprecated at v0.59.1, to be removed at >= v1.0.0. Pass in a beakWidth to dictate size.
    */
  beakStyle?: string;

  /**
   * @deprecated
   * Deprecated at v0.72.1 and will no longer exist after 1.0 use target instead.
   */
  targetElement?: HTMLElement;
}
