import { Action, ActionType } from "../actions/action";

export default function (old_state: number = 0, action: Action): number {
    switch (action.type) {
        case ActionType.INC_A:
            return old_state + 1;
        case ActionType.RESET_A:
            return 0;
        default:
            return old_state;
    }
}