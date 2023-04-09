import React from 'react';
import { Link } from 'react-router-dom';

const DisplayCocktail = ({cocktail}) => {
    const {strAlcoholic,strDrink,strDrinkThumb,idDrink} = cocktail;
    console.log(cocktail);
    return (
        <div>
            <div className="card w-full h-full bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={strDrinkThumb} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Name : {strDrink}</h2>
                    <h2 className="card-title">IsAlcoholic : {strAlcoholic}</h2>
                    <Link to={`/cocktail/${idDrink}`}>
                       <button className="btn-primary w-full block">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DisplayCocktail;