import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeCardHolderShowingParameter, updateCardHolder} from "../../store/actions/cardActions";
import {CardHolderElement} from "./CardHolderElement";

export function CardHolder() {
    const {cardHolder, placeholder, isCardHolderPlaceholderShown} = useSelector(state => state.card);
    const dispatch = useDispatch();
    let classes = 'name';
    if (cardHolder.length && isCardHolderPlaceholderShown) {
        classes = 'name -placeholder-leave'
    } else if (!cardHolder.length && isCardHolderPlaceholderShown) {
        classes = 'name -placeholder-append'
    }
    function animationEndHandler(event) {
        if (event.target.classList.contains('-placeholder-append')) {
            event.target.classList.remove('-placeholder-append')
        } else if (event.target.classList.contains('-placeholder-leave')) {
            dispatch(changeCardHolderShowingParameter());
        } else if (event.target.classList.contains('-leave-symbol')) {
            dispatch(updateCardHolder(event.target.textContent, event.target.dataset.index));
        }
    }
    return (
        <div className={classes} onAnimationEnd={animationEndHandler}>
            {isCardHolderPlaceholderShown ? placeholder.cardHolder : <CardHolderElement/>}
        </div>
    )
}
