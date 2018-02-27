import { Action, ActionType } from "../actions/action";

export default function (old_state: number = 0, action: Action): number {
    switch (action.type) {
        case ActionType.SET_B_PROMISE_FULFILLED:
            return action.payload;
        case ActionType.SET_B_PROMISE_REJECTED:
            return 0;
        default:
            return old_state;
    }
}