import {CHANGE_CARD_NUMBER} from "./actions/actionTypes";

export function cardNumberCheckMiddleware({dispatch}) {
    return function (next) {
        return function (action) {
            if (action.type === CHANGE_CARD_NUMBER && !isFinite(action.payload.cardNumber)) {
                return;
            }
            return next(action);
        }
    }
}
