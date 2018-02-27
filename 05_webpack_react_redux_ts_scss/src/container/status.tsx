import * as React from "react";
import { connect } from "react-redux";

import {GlobalState} from "../reducers/index";

type StatusProps = {
    valueA: number,
    valueB: number,
};

const Status = (props: StatusProps) => (
    <div>
        A: {props.valueA}<br />
        B: {props.valueB}<br />
    </div>
);

function mapStateToProps(state: GlobalState): StatusProps {
    return {
        valueA: state.valueA,
        valueB: state.valueB,
    };
}

export default connect(mapStateToProps)(Status);