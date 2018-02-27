import * as React from "react";
import { connect } from "react-redux";

import incrementA from "../actions/increment_a";
import resetA from "../actions/reset_a";
import { GlobalState } from "../reducers/index";

type AIncrementatorProps = {
    counterA: number,
    incrementA: () => void,
    resetA: () => void,
};

const AIncrementator = (props: AIncrementatorProps) => (
    <div>
        A: {props.counterA}<br />
        <button onClick={props.incrementA}>A++</button><br />
        <button onClick={props.resetA}>reset A</button>
    </div>
);

function mapStateToProps(state: GlobalState) {
    return {
        counterA: state.valueA,
    };
}

export default connect(mapStateToProps, { incrementA, resetA })(AIncrementator);