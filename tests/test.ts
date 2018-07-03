import {FSM} from '../built/index';
import {expect} from 'chai';

describe('Create a basic FSM', () => {
    const fsm = new FSM<null, null>();
    it('Create an FSM with one state', () => {
        expect(fsm.getStates()).to.eql(['start'])
        expect(fsm.getActiveState()).to.equal('start')
    });
    it('Add a state', () => {
        fsm.addState(null, 'state1');
        expect(fsm.getStates()).to.eql(['start', 'state1'])
    });
    let secondStateName;
    it('Add a second state', () => {
        secondStateName = fsm.addState();
        expect(secondStateName).to.be.a('string');
        expect(fsm.getStates()).to.eql(['start', 'state1', secondStateName])
    });

    it('Transition from start to state1', () => {
        const tName = fsm.addTransition('start', 'state1');
        expect(fsm.getActiveState()).to.equal('start');
        fsm.fireTransition(tName);
        expect(fsm.getActiveState()).to.equal('state1');
    });

    it(`Transition from state1 to second state`, () => {
        const tName = fsm.addTransition('state1', secondStateName);
        expect(fsm.getActiveState()).to.equal('state1');
        fsm.fireTransition(tName);
        expect(fsm.getActiveState()).to.equal(secondStateName);
    });

    it(`Remove state1`, () => {
        fsm.removeState('state1');
        expect(fsm.getStates()).to.eql(['start', secondStateName])
    });

    it('Destroy the FSM', () => {
        fsm.destroy();
    });
});

// describe('Traces to FSM', () => {
//     const fsm = new FSM<null, string>();
//     it('Add basic traces', () => {
//         const example_traces = [
//             [
//                 'begin',
//                 'click next',
//                 'click next',
//                 'click prev',
//                 'click ok'
//             ], [
//                 'begin',
//                 'click next',
//                 'click next',
//                 'click prev',
//                 'click x',
//                 'click next',
//                 'click prev',
//                 'click okay'
//             ], [
//                 'begin',
//                 'click ok'
//             ]
//         ];
//         const fsmTraces = example_traces.map((et) => (et.map((s) => [s, null]) as [string, null][]));
//         fsmTraces.forEach((t) => fsm.addTrace(t));
//         console.log(fsm.toString());
//         fsm.iterateMerge();
//         console.log(fsm.toString());
//         fsm.iterateMerge();
//         console.log(fsm.toString());
//         fsm.iterateMerge();
//         console.log(fsm.toString());
//         fsm.iterateMerge();
//         console.log(fsm.toString());
//         fsm.iterateMerge();
//         console.log(fsm.toString());
//     });
// });

describe('Load from JSON', () => {
    it('Create an FSM from JSON', () => {
        const str = '{"initial":"start","states":{"start":{"on":{"Search":"searching","Filter":"filtering","Navigate":"itemList"}},"searching":{"on":{"Search_success":"itemList","Cancel_search":"itemList","Filter":"filtering"}},"itemList":{"on":{"Serach":"searching","Select_item":"item","Filter":"filtering","Open_cart":"cart_checking"}},"item":{"on":{"Navigate":"itemList"}},"filtering":{"on":{"Filter_success":"itemList","Cancel_filter":"itemList","Search":"searching"}},"cart_checking":{"on":{"Save":"itemList","Unsave":"itemList"}}}}'
        const fsm = FSM.fromJSON(JSON.parse(str));
        fsm.fireTransition('start');
        expect(fsm.getActiveState()).to.equal('start');
        fsm.fireTransition('Search');
        expect(fsm.getActiveState()).to.equal('searching');
        fsm.fireTransition('Filter');
        expect(fsm.getActiveState()).to.equal('filtering');
    });
});
