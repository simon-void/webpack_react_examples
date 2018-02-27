enum ActionType {
    INC_A,
    RESET_A,
    SET_B_PROMISE = "SET_B_PROMISE",
    SET_B_PROMISE_FULFILLED = "SET_B_PROMISE_FULFILLED",
    SET_B_PROMISE_REJECTED = "SET_B_PROMISE_REJECTED",
}

type Action = {
    type: ActionType,
    payload?: any
}

export {
    ActionType,
    Action
}