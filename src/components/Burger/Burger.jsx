import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

import './Burger.scss';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKeys => {
            return [...Array(props.ingredients[igKeys])].map((_,i)=>{
                return <BurgerIngredient key={igKeys+i} type={igKeys} />
            })
        })
        .reduce((arr, obj) => {
            return arr.concat(obj);
        }, []);
    if(transformedIngredients.length === 0) transformedIngredients = <p>Please, add some ingredients!!</p>;
    return (
        <div className="burger">
           <BurgerIngredient type="bread-top" />
                {transformedIngredients}
           <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;