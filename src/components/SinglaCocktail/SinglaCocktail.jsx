import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SinglaCocktail = () => {
    const data = useLoaderData();
    const cocktail = data.drinks;
    console.log(cocktail);
    const {strDrinkThumb,strDrink,strAlcoholic } = cocktail;
    return (
        <div className='mt-24  lg:px-12'>
            <div className="card card-side bg-base-100 shadow-xl">
                <img src={strDrinkThumb} alt="" />
            <div className="card-body">
                <h2 className="card-title">Name : {strDrink}</h2>
                <h2 className="card-title">IsAlcoholic : {strAlcoholic}</h2>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Add To Cart</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default SinglaCocktail;