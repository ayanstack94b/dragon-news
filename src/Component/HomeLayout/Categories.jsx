import React, { use } from 'react';
import { NavLink } from 'react-router';
const categoriesPromise = fetch('/categories.json').then((res) => res.json())

const Categories = () => {

    const categories = use(categoriesPromise)
    return (
        <div>
            <h2 className='font-bold'>All Categories{categories.length}</h2>
            <div className="grid grid-cols-1 mt-5 gap-3">
                {
                    categories.map(category => <NavLink
                        className={'btn'}
                        key={category.id}>
                        {category.name}</NavLink>)
                }
            </div>

        </div>
    );
};

export default Categories;