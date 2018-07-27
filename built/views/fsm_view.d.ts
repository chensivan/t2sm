import { FSM } from '../index';
export declare class StateMachineDisplay {
    private fsm;
    private element;
    private svg;
    private dagreBinding;
    private graph;
    private states;
    private transitions;
    private createTransitionState;
    private creatingTransitionFromState;
    private creatingTransitionToState;
    private creatingTransitionLine;
    private addStateButton;
    constructor(fsm: FSM<any, any>, element: HTMLElement);
    addTransition(fromLabel: string, toLabel: string, payload?: any): string;
    private addViewForNewTransitions;
    addState(payload?: any): string;
    private addStateClicked;
    private addViewForNewNodes;
    private destroyTransitionCreationIntermediateData;
    private updateCreatingTransitionLine;
    private mousemoveSVG;
    private mousedownGroup;
    private mouseoutGroup;
    private mouseoverGroup;
    private mouseupWindow;
    private mouseupGroup;
    private updateLayout;
}