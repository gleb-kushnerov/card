import {
    CHANGE_CARD_HOLDER,
    CHANGE_CARD_HOLDER_SHOWING_PARAMETER,
    CHANGE_CARD_NUMBER,
    CHANGE_CARD_TYPE,
    CHANGE_CVV,
    CHANGE_MONTH,
    CHANGE_YEAR,
    CLEAR_FOCUS_ELEMENT_PARAMETERS,
    SET_FOCUS_ELEMENT_PARAMETERS,
    TOGGLE_FLIPPED_CARD,
    UPDATE_CARD_HOLDER,
    UPDATE_CARD_NUMBER,
    UPDATE_CARD_TYPE, UPDATE_MONTH, UPDATE_YEAR
} from "./actionTypes";

export function toggleFlippedCard() {
    return {
        type: TOGGLE_FLIPPED_CARD
    }
}

export function changeCardType(cardType) {
    return {
        type: CHANGE_CARD_TYPE,
        payload: cardType
    }
}

export function updateCardType() {
    return {
        type: UPDATE_CARD_TYPE
    }
}

export function changeCardNumber(cardNumber) {
    return {
        type: CHANGE_CARD_NUMBER,
        payload: {
            cardNumber
        }
    }
}

export function updateCardNumber(index) {
    return {
        type: UPDATE_CARD_NUMBER,
        payload: {
            index
        }
    }
}

export function changeCvv(cvv) {
    return {
        type: CHANGE_CVV,
        payload: {
            cvv
        }
    }
}

export function setFocusElementParameters(width, height, x, y) {
    return {
        type: SET_FOCUS_ELEMENT_PARAMETERS,
        payload: {
            width,
            height,
            x,
            y
        }
    }
}

export function clearFocusElementParameters() {
    return {
        type: CLEAR_FOCUS_ELEMENT_PARAMETERS,
    }
}

export function changeCardHolder(cardholder) {
    return {
        type: CHANGE_CARD_HOLDER,
        payload: cardholder
    }
}

export function updateCardHolder(symbol, index) {
    return {
        type: UPDATE_CARD_HOLDER,
        payload: {
            symbol,
            index
        }
    }
}

export function changeCardHolderShowingParameter() {
    return {
        type: CHANGE_CARD_HOLDER_SHOWING_PARAMETER
    }
}

export function changeMonth(month) {
    return {
        type: CHANGE_MONTH,
        payload: month
    }
}

export function updateMonth() {
    return {
        type: UPDATE_MONTH
    }
}

export function changeYear(year) {
    return {
        type: CHANGE_YEAR,
        payload: year
    }
}

export function updateYear() {
    return {
        type: UPDATE_YEAR
    }
}

