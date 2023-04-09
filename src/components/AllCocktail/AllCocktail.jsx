import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayCocktail from '../DisplayCocktail/DisplayCocktail';

const AllCocktail = () => {
    const data = useLoaderData();
    const cocktails = data.drinks;
    // console.log(cocktails);


    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-5 lg:px-12'>
                {
                    cocktails.map(cocktail=><DisplayCocktail
                        key={cocktail.idDrink}
                        cocktail={cocktail}
                    ></DisplayCocktail>)
                }
            </div>
        </div>
    );
};

export default AllCocktail;