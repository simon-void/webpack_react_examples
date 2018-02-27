enum ActionType {
    INC_A,
    RESET_A,
    SET_B,
}

type Action = {
    type: ActionType,
    value?: any
}

export {
    ActionType,
    Action
}