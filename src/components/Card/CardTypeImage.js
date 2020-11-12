import React, {lazy, Suspense} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateCardType} from "../../store/actions/cardActions";

const Image = lazy(() => import('./Image'));

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
        <Suspense fallback={<div>loading...</div>}>
            <div className="card-type" onAnimationEnd={animationEndHandler}>
                {
                    previous
                        ? <Image type={previous} classes={'card-type-img -leave'}/>
                        : null
                }
                <Image type={current} classes={classes}/>
            </div>
        </Suspense>
    )
}
