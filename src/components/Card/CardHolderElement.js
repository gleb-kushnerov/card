import React from "react";
import {useSelector} from "react-redux";

export function CardHolderElement() {
    const {cardHolder} = useSelector(state => state.card);
    return (
        <>
            {
                cardHolder.map((element, index) => {
                    let classes = 'cardholder-symbol';
                    const previousSymbol = element.charAt(1);
                    if (element === ' ') {
                        classes = `${classes} -separator`
                    } else if (previousSymbol) {
                        classes = `${classes} -leave-symbol`;
                    } else {
                        classes = `${classes} -append`;
                    }
                    return (
                        <span  key={index}>
                            <div className={classes} data-index={index}>
                                {previousSymbol || element}
                            </div>
                        </span>
                    )
                })
            }
        </>
    )
}
