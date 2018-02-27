import { Action, ActionType } from "./action";

export default function (): Action {
    return {
        type: ActionType.RESET_A,
    };
}