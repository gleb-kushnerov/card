import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateCardType} from "../../store/actions/cardActions";

export function CardTypeImage() {
    const {current, previous} = useSelector(state => state.card.cardType);
    const dispatch = useDispatch();
    const classes = `card-type-img${previous ? ' -append' : ''}`;
    function animationEndHandler(event) {
        if (event.target.classList.contains('-leave')) {

        } else if (event.target.classList.contains('-append')) {
            dispatch(updateCardType());
        }
    }
    return (
        <div className="card-type" onAnimationEnd={animationEndHandler}>
            {
                previous
                    ? <img src={require(`../../assets/${previous}.png`)} className='card-type-img -leave'/>
                    : null
            }
            <img src={require(`../../assets/${current}.png`)} className={classes}/>
        </div>
    )
}
