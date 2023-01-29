import React from 'react';

const FilterBy = (props: { passItems: any[]; setFilter: (arg0: string) => void; }) => {

    const categories = props.passItems
        .map((option) => option.category)
        .filter((value, index, array) => {
            return array.indexOf(value) === index;
        });
    categories.unshift("all products");

    const options = categories.map((value, index) => (
        <option value={value} key={index}>
            {value}
        </option>
    ));

    return (
        <div className="collection-sort">
            <label htmlFor="">Filter by: </label>
            <select onChange={(event) => props.setFilter(event.target.value)}>{options}</select>
        </div>
    );
};

export default FilterBy;