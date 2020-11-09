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
    UPDATE_CARD_TYPE,
    UPDATE_MONTH, UPDATE_YEAR
} from "../actions/actionTypes";

const initialState = {
    isCardFlipped: false,
    focusParameters: {
        width: null,
        height: null,
        x: null,
        y: null
    },
    cardType: {
        current: 'visa',
        previous: null
    },
    placeholder: {
        cardNumber: '################',
        cardHolder: 'Full Name',
        expires: 'MMYY'
    },
    cardNumber: ['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#'],
    cardNumberLength: 0,
    cvv: '',
    cardHolder: [],
    isCardHolderPlaceholderShown: true,
    month: {currentMonth: 'MM', previousMonth: ''},
    year: {currentYear: 'YY', previousYear: ''}
};

export function cardReducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_FLIPPED_CARD:
            return {...state, isCardFlipped: !state.isCardFlipped};
        break;
        case CHANGE_CARD_TYPE:
            if (action.payload !== state.cardType.current) {
                state.cardType.previous = state.cardType.current;
            }
            return {...state, cardType: {...state.cardType, current: action.payload}};
        break;
        case UPDATE_CARD_TYPE:
            return {...state, cardType: {...state.cardType, previous: null}};
        break;
        case CHANGE_CARD_NUMBER:
            const enteredNumber = action.payload.cardNumber;
            const currentNumberLength = state.cardNumberLength;
            const enteredNumberLength = enteredNumber.length;
            const newCardNumber = state.cardNumber.map((number, index) => {
                if (number !== enteredNumber[index] && index < enteredNumberLength) {
                    number = `${enteredNumber[index]}${number}`;
                } else if (enteredNumberLength < currentNumberLength
                    && index >= enteredNumberLength
                    && index < currentNumberLength) {
                    const previousNumber = number.charAt(0);
                    const currentNumber = state.placeholder.cardNumber.charAt(index);
                    return `${currentNumber}${previousNumber}`;
                }
                return number;
            });
            return {...state, cardNumber: newCardNumber, cardNumberLength: enteredNumberLength};
        break;
        case UPDATE_CARD_NUMBER:
            const i = action.payload.index;
            const currentNumber = state.cardNumber;
            currentNumber[i] = currentNumber[i].charAt(0);
            return {...state, cardNumber: currentNumber};
        break;
        case CHANGE_CVV:
            return {...state, cvv: action.payload.cvv};
        break;
        case SET_FOCUS_ELEMENT_PARAMETERS:
            return {...state, focusParameters: action.payload};
        break;
        case CLEAR_FOCUS_ELEMENT_PARAMETERS:
            return {...state, focusParameters: {
                    width: null,
                    height: null,
                    x: null,
                    y: null
                }};
        break;
        case CHANGE_CARD_HOLDER:
            const enteredName = action.payload;
            const enteredNameLength = action.payload.length;
            const currentNameLength = state.cardHolder.length;
            let cardHolder;
            if (enteredNameLength > currentNameLength) {
                cardHolder = action.payload.split('');
            } else {
                cardHolder = state.cardHolder.map((symbol, index) => {
                    if (symbol !== enteredName[index] && index < enteredNameLength) {
                        return `${enteredName[index]}${symbol}`;
                    } else if (enteredNameLength < currentNameLength
                        && index >= enteredNameLength
                        && index < currentNameLength) {
                        const previousSymbol = symbol.charAt(0);
                        const currentSymbol = state.cardHolder[index];
                        return `${currentSymbol}${previousSymbol}`;
                    }
                    return enteredName.charAt(index);
                });
            }
            return {...state, cardHolder};
        break;
        case UPDATE_CARD_HOLDER:
            let isCardHolderPlaceholderShown = state.isCardHolderPlaceholderShown;
            const j = action.payload.index;
            const currentSymbol = action.payload.symbol;
            let filteredCardHolder;
            if (currentSymbol === state.cardHolder[j].charAt(1)) {
                filteredCardHolder = state.cardHolder.filter((symbol, index) => {
                    return index.toString() !== action.payload.index;
                });
            } else {
                filteredCardHolder = state.cardHolder;
                filteredCardHolder[j] = filteredCardHolder[j].charAt(0);
            }
            if (!filteredCardHolder.length) isCardHolderPlaceholderShown = true;
            return {...state, cardHolder: filteredCardHolder, isCardHolderPlaceholderShown};
        break;
        case CHANGE_CARD_HOLDER_SHOWING_PARAMETER:
            return {...state, isCardHolderPlaceholderShown: !state.isCardHolderPlaceholderShown};
        break;
        case CHANGE_MONTH:
            const previousMonth = state.month.currentMonth;
            const currentMonth = action.payload;
            return {...state, month: {currentMonth, previousMonth}};
        break;
        case UPDATE_MONTH:
            return {...state, month: {currentMonth: state.month.currentMonth, previousMonth: ''}};
        break;
        case CHANGE_YEAR:
            const previousYear = state.year.currentYear;
            const currentYear = action.payload.slice(2);
            return {...state, year: {previousYear, currentYear}};
        break;
        case UPDATE_YEAR:
            return {...state, year: {currentYear: state.year.currentYear, previousYear: ''}};
            break;
        default:
            return state;
        break;
    }
}
