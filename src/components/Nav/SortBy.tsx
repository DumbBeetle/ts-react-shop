import React from 'react';

const SortBy = (props: { setSort: (arg0: string) => void; }) => {
    const optionsNames: string[] = [
        "Featured",
        "Best Selling",
        "Alphabetically, A-Z",
        "Alphabetically, Z-A",
        "Price, low to high",
        "Price, high to low",
        "Rating, low to high",
        "Rating, high to low",
    ];
    const options: JSX.Element[] = optionsNames.map((value, index) => (
        <option value={value} key={index}>
            {value}
        </option>
    ));
    return (
        <div className="collection-sort">
            <label htmlFor="">Sort by:</label>
            <select onChange={(event) => props.setSort(event.target.value)}>{options}</select>
        </div>
    );
};

export default SortBy;