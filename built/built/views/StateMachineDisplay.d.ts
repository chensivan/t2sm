import 'svg.pathmorphing.js';
import { FSM } from '..';
import { ForeignObjectDisplay } from './ForeignObjectDisplay';
export declare enum DISPLAY_TYPE {
    STATE = 0,
    TRANSITION = 1
}
export declare class StateMachineDisplay {
    private fsm;
    private element;
    private getForeignObjectViewport?;
    private header;
    private svgContainer;
    private svg;
    private dagreBinding;
    private graph;
    private states;
    private transitions;
    private stateFODisplays;
    private transitionFODisplays;
    private fsmState;
    private creatingTransitionFromState;
    private creatingTransitionToState;
    private creatingTransitionLine;
    private modifyingTransition;
    private addStateButton;
    private addTransitionButton;
    private removeStateButton;
    private removeTransitionButton;
    private resetLayoutButton;
    private animationDuration;
    private startStateDimensions;
    private stateDimensions;
    private transitionLabelDimensions;
    private colors;
    private transitionThickness;
    constructor(fsm: FSM<any, any>, element: HTMLElement, getForeignObjectViewport?: (el: ForeignObjectDisplay) => void);
    addTransition(fromLabel: string, toLabel: string, payload?: any): string;
    private resetLayout;
    private addViewForNewTransitions;
    onTransitionFired(transition: string, event: any): void;
    animateTransition(transition: string): void;
    addState(payload?: any): string;
    private addStateClicked;
    private addTransitionClicked;
    private removeStateClicked;
    private removeTransitionClicked;
    private addStateListeners;
    private addTransitionListeners;
    private addViewForNewNodes;
    private removeViewForOldNodes;
    private removeViewForOldTransitions;
    private destroyTransitionCreationIntermediateData;
    private updateCreatingTransitionLine;
    private mousemoveWindow;
    private mouseoverTransitionGroup;
    private mouseoutTransitionGroup;
    private mouseupTransitionGroup;
    private mousedownTransitionGroup;
    private mousedownStateGroup;
    private mouseoutStateGroup;
    private mouseoverStateGroup;
    private keydownWindow;
    private mouseupWindow;
    private mouseupStateGroup;
    private getArrowPath;
    private updateLayout;
    private forEachInGroup;
}
