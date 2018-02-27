// string enums are used instead of nummeric enums because
// redux-promise-middleware assumes that action.type contains a string
enum ActionType {
    INC_A = "INC_A",
    RESET_A = "RESET_A",
    SET_B_PROMISE = "SET_B_PROMISE",
    // redux-promise-middleware creates actions with these types from the base SET_B_PROMISE
    SET_B_PROMISE_FULFILLED = "SET_B_PROMISE_FULFILLED",
    SET_B_PROMISE_REJECTED = "SET_B_PROMISE_REJECTED",
}

// redux-promise-middleware checks if action.payload contains a Promise
type Action = {
    type: ActionType,
    payload?: any
}

export {
    ActionType,
    Action
}