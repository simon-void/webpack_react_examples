import * as React from "react";
import { connect } from "react-redux";

import setB from "../actions/set_b";
import { GlobalState } from "../reducers/index";

type BModificatorProps = {
    counterB: number,
    setB: (netB: number) => void,
};

type BModificatorState = {
    textB: string,
};

class BModificator extends React.Component<BModificatorProps, BModificatorState> {
    constructor(props: any) {
        super(props);

        this.state = {
            textB: props.counterB.toString(),
        };

        this.handleUpdateB = this.handleUpdateB.bind(this);
    }

    render() {
        return (<div>
            B: {this.props.counterB}<br />
            update B asynchronously (1s delay, only ints):<br />
            <input
                value={this.state.textB}
                onChange={this.handleUpdateB}
            />
        </div>);
    }

    private handleUpdateB(event: any): void {
        let newTextB: string = event.target.value;
        // make sure the new value is a number
        // fallback on 0, if not
        let newB: number = Number(newTextB);
        if (isNaN(newB)) {
            newB = 0;
        }

        this.setState({
            textB: newB.toString()
        });
        this.props.setB(newB);
    }
}

function mapStateToProps(state: GlobalState) {
    return {
        counterB: state.valueB,
    };
}

export default connect(mapStateToProps, { setB })(BModificator);