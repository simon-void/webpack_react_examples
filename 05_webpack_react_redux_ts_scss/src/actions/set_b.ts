import { Action, ActionType } from "./action";

export default function (newB: number): Action {
    return {
        type: ActionType.SET_B,
        value: newB
    };
}