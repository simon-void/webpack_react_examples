import { Switch } from "react-router";

import { Action, ActionType } from "../actions/action";

export default function (old_state: number = 0, action: Action): number {
    switch (action.type) {
        case ActionType.SET_B:
            return action.value;
        default:
            return old_state;
    }
}