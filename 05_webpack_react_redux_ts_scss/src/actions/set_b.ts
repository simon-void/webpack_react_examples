import { Action, ActionType } from "./action";

export default function (newB: number): Action {
    // simulation of an asynchron request
    // to demonstrate how redux-promise-middleware (as configured in index.tsx)
    // converts this into SET_B_PROMISE_FULFILLED or SET_B_PROMISE_REJECTED actions
    // which the reducer in reducer_value_b.ts consumes
    let asyncResult: Promise<number> = new Promise<number>((resolve, reject) => {
        // wait 1s before sending out the new value of b in order to simulare a request delay
        setTimeout(()=>resolve(newB), 1000);
    });
    return {
        type: ActionType.SET_B_PROMISE,
        payload: asyncResult
    };
}